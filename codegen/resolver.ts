import {
  isHeaderParameter,
  isPathParameter,
  isQueryParameter,
  isSchemaArray,
  isSchemaObject,
  type MethodResponses,
  type Parameter,
  type Schema,
} from "./types.ts";

export function resolvePrimitive(type?: string): string {
  switch (type) {
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    default:
      return "unknown";
  }
}

export function quoteKey(key: string): string {
  return key.includes("-") || key.includes(":") || key.includes(".")
    ? `"${key}"`
    : key;
}

export function resolveSchema(schema: Schema & { name: string }): string {
  if (isSchemaObject(schema.type)) {
    if (!schema.properties || Object.keys(schema.properties).length === 0) {
      return `${quoteKey(schema.name)}: Record<string, unknown>`;
    }

    return `${quoteKey(schema.name)}: { ${
      Object.entries(schema.properties).map(([name, config]) => {
        if (isSchemaObject(config?.type)) {
          if (
            !config.properties || Object.keys(config.properties).length === 0
          ) {
            return `${quoteKey(name)}: Record<string, unknown>`;
          }
          return resolveSchema({ ...config, name });
        }

        if (isSchemaArray(config?.type)) {
          return resolveSchema({ ...config, name });
        }

        return `${quoteKey(name)}: ${resolvePrimitive(config?.type)}`;
      }).join("; ")
    } }`;
  } else if (isSchemaArray(schema.type)) {
    if (!schema.items || Object.keys(schema.items).length === 0) {
      return `${quoteKey(schema.name)}: unknown[]`;
    }

    if (isSchemaObject(schema.items.type)) {
      return `${resolveSchema({ ...schema.items, name: schema.name })}[]`;
    }

    return `${quoteKey(schema.name)}: ${resolvePrimitive(schema.items.type)}[]`;
  }

  return `${quoteKey(schema.name)}: ${resolvePrimitive(schema.type)}`;
}

export function resolveResponses(responses?: MethodResponses): string {
  const res = responses ? Object.entries(responses) : [];

  return res.map(([status, config]) => {
    const resolvedSchema = resolveSchema({
      ...config.content["application/json"].schema,
      name: status,
    });

    // Remove resolved status prefix (e.g. `200: `)
    return resolvedSchema.slice(4, resolvedSchema.length);
  }).join(" | ");
}

export function resolveParameters(parameters?: Parameter[]): {
  pathParams: Parameter[];
  queryParams: Parameter[];
  headerParams: Parameter[];
} {
  const params: Parameter[] = parameters?.map((p) => ({
    ...p,
    schema: { ...p.schema, type: resolvePrimitive(p.schema.type) },
  })) || [];

  const pathParams: Parameter[] = params.filter((p) => isPathParameter(p));
  const queryParams: Parameter[] = params.filter((p) => isQueryParameter(p));
  const headerParams: Parameter[] = params.filter((p) => isHeaderParameter(p));
  const other: unknown[] = params.filter((p) =>
    !isPathParameter(p) && !isQueryParameter(p) && !isHeaderParameter(p)
  );

  if (other.length !== 0) {
    console.warn("Unprocessed parameters:", other);
  }

  return { pathParams, queryParams, headerParams };
}
