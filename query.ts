import { createLookupTableFromWords, letterFreqs } from "./build.ts";
import { R } from "./deps.ts";
import { reveal } from "./represent.ts";
import { char, frequency, index } from "./types.ts";

const mostToLeastHidden = (word: string) =>
	(perLetterFreqs: [char, frequency, index][]) => {
		const range = R.range(0, word.length + 1);
		return range.map((i) => {
			const indicesToReveal = perLetterFreqs.slice(0, i).map((c) => c[2]);
			return reveal(indicesToReveal)(word);
		});
	};

export const createHiderFromTable = (
	lookupTable: {
		[key: string]: number;
	}[][],
) => {
	const lookupFn = (word: string) =>
		lookupTable[word.length]
			? R.pipe(
				letterFreqs(lookupTable[word.length]),
				mostToLeastHidden(word),
			)(word)
			: R.range(0, word.length).map((i) => reveal(R.range(0, i))(word));

	return {
		show: (showThisManyLetters: number) =>
			(word: string) =>
				R.pipe(lookupFn, (a) => a[showThisManyLetters] || word)(
					word,
				),
		getAll: lookupFn,
		table: lookupTable,
	};
};

export const makeHider = R.pipe(
	createLookupTableFromWords,
	(p) => p.then(createHiderFromTable),
);

export type Hider = ReturnType<typeof createHiderFromTable>;
export type HiderEffect = {
	hider: ReturnType<typeof createHiderFromTable>;
}