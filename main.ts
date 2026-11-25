// Dad Joke Showdown — one dad joke, at most 200 characters.
// The program writes the joke to /output/entry.txt for the sealed scorer.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "I brought a ladder to the barbecue. I heard the steaks were high.";

// The gate only accepts 1–200 characters, so never emit an over-long joke.
if (JOKE.length === 0 || JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} characters; the limit is 200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
