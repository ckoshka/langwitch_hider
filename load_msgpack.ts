import { createHiderFromTable } from "./query.ts";
import { aPipe, cache, R, unpack } from "./deps.ts";

export const hiderFromMsgpackUrl = aPipe([
	cache,
	R.prop("path"),
	Deno.readFile,
	unpack,
	createHiderFromTable,
]);

export const international = () =>
	Promise.resolve(
		hiderFromMsgpackUrl(
			`https://github.com/ckoshka/hider/assets/frequency_table.msgpack?raw=true`,
		),
	); // needed for correct type inference
