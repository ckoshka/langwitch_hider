import { punctuation } from "./deps.ts";

export const reveal = (letterPos: number[]) =>
	(s: string) =>
		[...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(
			s,
		)]
			.map((c) => c.segment)
			.map((c, i) =>
				letterPos.includes(i) ? c : punctuation.has(c) ? c : "•"
			)
			.join("");
