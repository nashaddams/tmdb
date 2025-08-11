import { generate } from "../generate.ts";
import type { TmdbApi } from "../types.ts";
import openapi from "./openapi.json" with { type: "json" };

await generate(openapi satisfies TmdbApi, "src/v4/mod.ts");
