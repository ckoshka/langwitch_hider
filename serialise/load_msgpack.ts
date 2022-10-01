import { createHiderFromTable } from "../query.ts";
import { aPipe, cache, R, unpack } from "../deps.ts";

export const hiderFromMsgpackUrl = aPipe([
	cache,
	R.prop("path"),
	//fetch,
	//(r: Response) => r.arrayBuffer().then(a => new Uint8Array(a)),
	Deno.readFile,
	unpack,
	createHiderFromTable,
]);

export const international = () =>
	Promise.resolve(
		hiderFromMsgpackUrl(
			`https://github.com/ckoshka/langwitch_hider/raw/master/assets/freqtable_v2.msgpack`,
		),
	); // needed for correct type inference
	// change this back to cache