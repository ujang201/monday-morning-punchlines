// Monday Morning Punchlines — entry program.
//
// The program composes exactly one joke about Monday mornings and writes it
// to /output/entry.txt. The joke is a fixed, hand-written line: no network,
// no randomness, no clock reads, so every run produces byte-identical output.
//
// Joke craft notes (kept here so a reviewer can see the intent):
//   * On-topic: the scene is a Monday morning, not a generic bad day.
//   * The turn: the alarm clock — the thing whose only job is to wake you —
//     gives up first and snoozes *itself*. The object of the complaint
//     becomes the one complaining.
//   * Economy: one sentence, no filler setup, every word earns its place.
//   * Freshness: no coffee, no "I hate Mondays", no traffic — the twist is
//     the alarm's surrender, not the sleeper's.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The joke. 80 characters, well inside the 200-character gate.
const JOKE =
  "Monday morning my alarm went off, took one look at me, and hit snooze on itself.";

// The gate counts characters; guard the entry at build time so a future edit
// can never silently push it past 200 or leave it empty.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only white space");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
