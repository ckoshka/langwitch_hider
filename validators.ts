import { Validator } from "./deps.ts";
import { word } from "./types.ts";

export const itemsAreUniformInLength = Validator(
	"itemsAreUniformInLength",
	(arr: Array<word>) =>
		arr.length > 0 &&
		arr.filter((a) => a.length !== arr[0].length).length === 0,
);
