import { parse } from "https://deno.land/std/flags/mod.ts";
import { readLines } from "https://deno.land/std@0.157.0/io/mod.ts";
import { aPipe } from "../deps.ts";
import { makeHider } from "../query.ts";
import { dumpHider } from "../serialise/dump_msgpack.ts";

aPipe([
	() => Deno.stdin,
	readLines,
	makeHider,
	dumpHider,
	(data: Uint8Array) => Deno.writeFile(parse(Deno.args)["out"], data),
])();
