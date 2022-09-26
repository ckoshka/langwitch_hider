import { punctuation } from "./deps.ts";

export const reveal = (letterPos: number[]) =>
	(s: string) =>
		Array.from(s)
			.map((c, i) =>
				letterPos.includes(i) ? c : punctuation.has(c) ? c : "•"
			)
			.join("");
