import { assertEquals } from "@std/assert/equals";
import { resolvePrimitive } from "../codegen/resolver.ts";

Deno.test("boolean => boolean", () => {
  assertEquals(resolvePrimitive("boolean"), "boolean");
});

Deno.test("string => string", () => {
  assertEquals(resolvePrimitive("string"), "string");
});

Deno.test("integer => number", () => {
  assertEquals(resolvePrimitive("integer"), "number");
});

Deno.test("number => number", () => {
  assertEquals(resolvePrimitive("number"), "number");
});

Deno.test("undefined => unknown", () => {
  assertEquals(resolvePrimitive("undefined"), "unknown");
});

Deno.test("`undefined` => unknown", () => {
  assertEquals(resolvePrimitive(undefined), "unknown");
});

Deno.test("super-invalid-type => unknown", () => {
  assertEquals(resolvePrimitive("super-invalid-type"), "unknown");
});
