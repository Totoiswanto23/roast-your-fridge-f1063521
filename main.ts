// One Line, One Laugh: Roast Your Fridge — make.fun bounty
// Writes one single-line roast of a fridge to /output/entry.txt
// (gate: UTF-8, 1-200 chars, single line).

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge's crisper drawer is where vegetables go to die quietly — I opened it twice this year, and both times something in there asked for a lawyer.";

// Gate guard: the entry must be one line of 1-200 chars.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`Invalid entry: ${ROAST.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST + "\n", "utf8");
console.log(`Wrote ${ROAST.length} chars to ${outDir}/entry.txt`);
console.log(ROAST);
