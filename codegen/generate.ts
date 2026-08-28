import {
  IndentationText,
  type OptionalKind,
  type ParameterDeclarationStructure,
  Project,
} from "@ts-morph/ts-morph";
import { toCamelCase } from "@std/text";
import type { TmdbApi } from "./types.ts";
import {
  quoteKey,
  resolveParameters,
  resolvePrimitive,
  resolveResponses,
} from "./resolver.ts";

export async function generate(spec: TmdbApi, path: string) {
  const project = new Project({
    manipulationSettings: { indentationText: IndentationText.TwoSpaces },
  });

  const file = project.createSourceFile(path, undefined, { overwrite: true });

  const c = file.addClass({
    name: "TmdbApi",
    isExported: true,
    docs: [`${spec.info.title} v${spec.info.version}`],
  });

  c.addProperties([{
    name: "#base_url",
    type: "string",
    initializer: `"${spec.servers[0].url}"`,
  }, {
    name: "#api_key",
    type: "string",
  }]);

  c.addConstructor({
    parameters: [{
      name: "api_key",
      type: "string",
    }],
  }).setBodyText((writer) => {
    writer.writeLine("this.#api_key = api_key;");
  });

  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [method, config] of Object.entries(methods)) {
      const m = c.addMethod({
        name: toCamelCase(config.operationId),
        isAsync: true,
        returnType: config.responses
          ? `Promise<${resolveResponses(config.responses)}>`
          : `Promise<void>`,
      });

      const { pathParams, queryParams } = resolveParameters(config.parameters);

      const parameters: OptionalKind<ParameterDeclarationStructure>[] = [];

      const hasOnlyOptionalParams = ![...pathParams, ...queryParams]
        .map((qp) => qp.required)
        .filter((qp) => qp !== undefined && qp !== false)
        .length;

      if ([...pathParams, ...queryParams].length) {
        parameters.push({
          name: "opts",
          type: `{ ${
            [...pathParams, ...queryParams]
              .map((p) => {
                const enums: string[] = p.schema.enum?.filter((e) =>
                  e !== ""
                ) ?? [];

                const type = enums.length
                  ? enums.map((e) => `"${e}"`).join(" | ")
                  : resolvePrimitive(p.schema.type);

                return `${quoteKey(p.name)}${p.required ? "" : "?"}: ${type};`;
              })
              .join(" ")
          } }`,
          hasQuestionToken: hasOnlyOptionalParams,
        });
      }

      const hasRequestQueryParams = !!queryParams.length;
      const hasRequestBody = !!config.requestBody?.content["application/json"]
        .schema;

      if (hasRequestBody) {
        parameters.push({
          name: "body",
          type: "Record<string, unknown>",
        });
      }

      if (parameters) {
        m.addParameters(parameters);
      }

      let requestPath = path;
      for (const pp of pathParams) {
        if (requestPath.includes(pp.name)) {
          requestPath = requestPath.replace(
            `{${pp.name}}`,
            `\${opts.${pp.name}}`,
          );
        }
      }

      const requestQueryParams = hasRequestQueryParams
        ? `
        let queryParams = "";

        ${
          queryParams.map((qp) =>
            `
            if (opts${hasOnlyOptionalParams ? "?." : ""}["${qp.name}"]) {
              queryParams += \`&${qp.name}=\${opts["${qp.name}"]}\`;
            }
          `.trim()
          ).join("")
        }
      `.trim()
        : "";
      const requestBody = hasRequestBody ? `body: JSON.stringify(body),` : "";

      m.setBodyText(`
        ${requestQueryParams}

        return await (await fetch(\`\${this.#base_url}${requestPath}?api_key=\${this.#api_key}${
        hasRequestQueryParams ? "\${queryParams}" : ""
      }\`, {
          method: "${method.toUpperCase()}",
          headers: {
            Accept: 'application/json',
            ${requestBody}
          },
        })).json();
      `.trim());

      const jsDocDescription = [
        config.description ? `${config.description}\n` : undefined,
        parameters?.length
          ? parameters?.map((p) => `@param {${p.type}} ${p.name}`)
          : undefined,
        `@see https://developer.themoviedb.org/v${spec.info.version}/reference/${config.operationId}`,
      ].flat().filter((d) => d !== undefined).join("\n");

      m.addJsDoc({ description: jsDocDescription });
    }
  }

  await file.save();
}
