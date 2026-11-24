// One-Sentence Absurd Invention Pitch — make.fun entry.
//
// Writes a single original pitch sentence to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: one sentence, at most 220 characters, naming a ridiculous
// invention and the tiny everyday annoyance it fixes.
const PITCH =
  "A sock with a built-in GPS chip that, the moment its partner vanishes in the wash, texts you 'I eloped with a bath towel' and files for emotional damages.";

// The gate (mirrors the sealed scorer): /output/entry.txt must be UTF-8
// text of 1 to 220 characters, not only white space. Fail loudly here
// rather than shipping an invalid entry.
if (PITCH.length < 1 || PITCH.length > 220 || PITCH.trim().length === 0) {
  throw new Error(`pitch fails the gate: ${PITCH.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(PITCH);
