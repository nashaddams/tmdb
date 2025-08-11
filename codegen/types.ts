export type Schema = {
  type?: string;
  required?: boolean | string[];
  default?: boolean | number | string;
  example?: boolean | number | string;
  enum?: string[];
  properties?: { [name: string]: Schema | undefined };
  items?: Schema;
};

export const isSchemaPrimitive = (
  type?: string,
): type is "string" | "integer" | "boolean" =>
  type === "string" || type === "integer" || type === "boolean";
export const isSchemaObject = (type?: string): type is "object" =>
  type === "object";
export const isSchemaArray = (type?: string): type is "array" =>
  type === "array";

export type Parameter = {
  in: string;
  name: string;
  required?: boolean;
  schema: {
    type: string;
    format?: string;
    default?: unknown;
    description?: string;
    enum?: string[];
  };
};

export const isPathParameter = (param: Parameter): param is Parameter =>
  param.in === "path";
export const isQueryParameter = (param: Parameter): param is Parameter =>
  param.in === "query";
export const isHeaderParameter = (param: Parameter): param is Parameter =>
  param.in === "header";

type MethodRequestBody = {
  content: {
    "application/json": {
      schema: {
        type: string;
        properties: { RAW_BODY: { type: string; format: string } };
        required?: string[];
      };
      examples: { "Request Example": { value: Record<string, unknown> } };
    };
  };
};

export type MethodResponses = {
  [status: string]: {
    description: string;
    content: { [contentType: string]: { schema: Schema } };
  };
};

type Method = {
  operationId: string;
  summary: string;
  description?: string;
  deprecated?: boolean;
  parameters?: Parameter[];
  requestBody?: MethodRequestBody;
  responses?: MethodResponses;
};

export type TmdbApi = {
  openapi: string;
  info: { title: string; version: string };
  servers: { url: string }[];
  components: {
    securitySchemes: {
      [sec: string]: {
        type: string;
        in: string;
        name: string;
        "x-bearer-format": string;
        "x-default"?: string;
      };
    };
  };
  security: { [sec: string]: unknown[] }[];
  paths: {
    [path: string]: {
      get?: Method;
      post?: Method;
      put?: Method;
      delete?: Method;
    };
  };
  "x-readme": {
    headers: unknown[];
    "explorer-enabled": boolean;
    "proxy-enabled": boolean;
  };
  "x-readme-fauxas": boolean;
};
