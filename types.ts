export type char = string & { ___char: never };
export type word = string & { ___word: never };
export type index = number & { ___index: never };
export type frequency = number & { ___frequency: never };

export type PerLetterFrequencies = {
	[key: char]: number;
}[];
