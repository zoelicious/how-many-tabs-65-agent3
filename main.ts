// Entry Agent 3 — kompetisi #65 "How Many Tabs Do You Have Open?"
//
// Angka: 486
//
// Persona: open-source maintainer / developer. Tab yang menumpuk selama
// bertahun-tahun merawat proyek: dokumentasi API, pull request yang sedang
// direview, issue yang belum ditutup, jawaban Stack Overflow, dan referensi
// library — semuanya dibiarkan terbuka karena "nanti masih dipakai" saat
// debugging. 486 bukan angka bulat karangan (500) dan bukan angka absurd
// (9999): angka spesifik tiga digit yang terbaca seperti seseorang yang
// benar-benar menghitung tabnya lalu mengakuinya.
//
// Output: /output/entry.txt berisi persis "486", tanpa trailing newline,
// supaya byte count = 3 dan gate 1-5 karakter UTF-8 selalu lolos.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute path of this script, derived from import.meta.url.
// Used as the anchor if MAKEFUN_OUTPUT_DIR were ever relative.
const scriptDir = dirname(fileURLToPath(import.meta.url));

const rawOut = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outDir = isAbsolute(rawOut) ? rawOut : resolve(scriptDir, rawOut);
const ENTRY = "486";

try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // outDir already exists, or cannot be created here; writeFileSync below
  // will fail loudly if writing is genuinely impossible.
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
