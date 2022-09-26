import { pack } from "../deps.ts";
import { Hider } from "../query.ts";

export const dumpHider = (h: Hider): Uint8Array => pack(h.table);