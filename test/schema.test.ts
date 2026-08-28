import { assertEquals } from "@std/assert/equals";
import { resolveSchema } from "../codegen/resolver.ts";

Deno.test("object with missing properties", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
  });
  assertEquals(schema, `mock: Record<string, unknown>`);
});

Deno.test("object with empty properties", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {},
  });
  assertEquals(schema, `mock: Record<string, unknown>`);
});

Deno.test("object with primitive property", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {
      average: { type: "number" },
    },
  });
  assertEquals(schema, `mock: { average: number }`);
});

Deno.test("object with object property and missing properties", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {
      average: { type: "object" },
    },
  });
  assertEquals(schema, `mock: { average: Record<string, unknown> }`);
});

Deno.test("object with object property and empty properties", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {
      average: { type: "object", properties: {} },
    },
  });
  assertEquals(schema, `mock: { average: Record<string, unknown> }`);
});

Deno.test("object with object property and primitive property", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {
      average: { type: "object", properties: { mean: { type: "number" } } },
    },
  });
  assertEquals(schema, `mock: { average: { mean: number } }`);
});

Deno.test("object with object property and object property and primitive property", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {
      average: {
        type: "object",
        properties: {
          mean: { type: "object", properties: { max: { type: "number" } } },
        },
      },
    },
  });
  assertEquals(schema, `mock: { average: { mean: { max: number } } }`);
});

Deno.test("array with missing items", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "array",
  });
  assertEquals(schema, `mock: unknown[]`);
});

Deno.test("array with empty items", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "array",
    items: {},
  });
  assertEquals(schema, `mock: unknown[]`);
});

Deno.test("array with primitive items", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "array",
    items: { type: "number" },
  });
  assertEquals(schema, `mock: number[]`);
});

Deno.test("array with object items", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "array",
    items: { type: "object", properties: { average: { type: "number" } } },
  });
  assertEquals(schema, `mock: { average: number }[]`);
});

Deno.test("complex schema", () => {
  const schema = resolveSchema({
    name: "mock",
    type: "object",
    properties: {
      average: { type: "number" },
      mean: { type: "string" },
      results: {
        type: "array",
        items: {
          type: "object",
          properties: {
            real: { type: "boolean" },
            original: { type: "string" },
            ids: { type: "array", items: { type: "integer" } },
          },
        },
      },
      comments: { type: "object", properties: { "weird:617127": {} } },
      created: { type: "object", properties: { path: { type: "string" } } },
      formal: { type: "object", properties: {} },
    },
  });
  assertEquals(
    schema,
    `mock: { average: number; mean: string; results: { real: boolean; original: string; ids: number[] }[]; comments: { "weird:617127": unknown }; created: { path: string }; formal: Record<string, unknown> }`,
  );
});
