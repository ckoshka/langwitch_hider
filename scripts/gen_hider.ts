import { makeHider } from "../query.ts";
import { aPipe, cache, R, unpack } from "../deps.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import * as G from "https://cdn.jsdelivr.net/gh/ckoshka/gen/async_gens.ts";
import { openLinesFromFile } from "https://cdn.jsdelivr.net/gh/ckoshka/gen/impure/iters.ts";
import { dumpHider } from "../serialise/dump_msgpack.ts";
import { readLines } from "https://deno.land/std@0.157.0/io/mod.ts";

aPipe([
	() => Deno.stdin,
	readLines,
	makeHider,
	dumpHider,
	(data: Uint8Array) => Deno.writeFile(parse(Deno.args)["out"], data),
])();
