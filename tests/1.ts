import { international } from "../mod.ts";
import {
	assert,
	assertEquals,
	fail,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test({
	name: "correctly loads msgpack from cache",
	fn: async () => {
		const hider = await international();

		[
			`a`,
			`ɛyɛbalitem`,
			`malahaklong`,
			`smoginess`,
			`હોદિયા`,
			`ӱӱрениӂилӓрлӓн`,
			`समझदारा`,
			`استراحت`,
			`scˀoia`,
			`hʼôhôlibama`,
			`ပညာရှိသောသူသည`,
			`拉马撒巴各大尼`,
			`希西家生馬拿西`,
			`okatsitzimoshiretanakeri`,
			`ժամանակներուն`,
			`grakanutʿiwnə`,
			`ạlbktyryạ`,
		].map(hider.getAll).map(x => console.log(x))
	},
});
