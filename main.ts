// One Line, Big Laugh — make.fun bounty entry.
// Writes a single funny line (1–200 chars) to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smoke alarm and I have an understanding: it screams, I wave a tea towel at it, and we both pretend the toast never happened.";

// Gate: the sealed scorer only accepts UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(LINE);
