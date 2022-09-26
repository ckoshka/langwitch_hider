import { R, Valid } from "./deps.ts";
import { char, frequency, index, PerLetterFrequencies, word } from "./types.ts";

const freqs = (arr: char[]) =>
	arr.reduce((acc, curr) => {
		acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
		return acc;
	}, {} as { [key: string]: number });

const vertSlice = (arr: Valid<word[], "itemsAreUniformInLength">) =>
	R.range(0, arr[0].length).map((i: number) => arr.map((w) => w[i] as char));

const freqOf = (freqs: { [key: char]: number }) => (lt: char) => freqs[lt] || 0;

const calcFreqsAtEachIdx = R.pipe(
	vertSlice,
	R.map(freqs),
);

const lookup = (freqsFor: PerLetterFrequencies) =>
	(idx: number) => freqOf(freqsFor[idx]);

export const letterFreqs = (freqsFor: PerLetterFrequencies) =>
	(word: string): [char, frequency, index][] =>
		Array.from(word)
			.map(
				(l, i) =>
					[l, lookup(freqsFor)(i)(l as char), i] as [
						char,
						frequency,
						index,
					],
			)
			.sort((a, b) => a[1] - b[1]);

export const createLookupTableFromWords = async (
	words: AsyncIterableIterator<string>,
) => {
	const table = R.range(1, 42).map(() => [] as word[]);
	for await (const word of words) {
		if (word.length < 40 && word.length > 0) {
			table[word.length].push(word as word); // do we actually care about what the iterator is?
		}
	}
	return table.filter((a) => a.length > 0).map((xs) =>
		calcFreqsAtEachIdx(xs as Valid<word[], "itemsAreUniformInLength">)
	);
};
