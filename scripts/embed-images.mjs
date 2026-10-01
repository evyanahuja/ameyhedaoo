#!/usr/bin/env node
/**
 * Embeds every image in public/images/ into src/assets/photos.ts as data URIs.
 *
 * Why this exists
 * ---------------
 * The production build imports photos from `src/assets/photos.ts` (plain source code).
 * That means the build NEVER depends on binary files being tracked by git — which is
 * what previously broke the GitHub build ("Could not resolve ../assets/*.jpg").
 *
 * Usage
 * -----
 *   node scripts/embed-images.mjs
 *
 * Put your images in public/images/ first:
 *   amey-hero.png      -> the main hero poster/photo  (exports ameyPoster)
 *   service-clean.jpg  -> morning / cleaning panel    (exports cleanImg)
 *   service-cooking.jpg-> cooking panel               (exports cookImg)
 *   service-organize.jpg -> evening / laundry panel   (exports organizeImg)
 *
 * If `sharp` is installed (npm i -D sharp) images are resized + compressed.
 * Without it the originals are embedded as-is (larger file, same result).
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const IMAGES = path.join(ROOT, "public", "images");
const OUT = path.join(ROOT, "src", "assets", "photos.ts");

/** source file -> exported name */
const MAP = [
  { file: "amey-hero.png", exportName: "ameyPoster", width: 900, quality: 82, fallback: "amey-hero.jpg" },
  { file: "service-clean.jpg", exportName: "cleanImg", width: 1100, quality: 80 },
  { file: "service-cooking.jpg", exportName: "cookImg", width: 1100, quality: 80 },
  { file: "service-organize.jpg", exportName: "organizeImg", width: 1100, quality: 80 },
];

let sharp = null;
try {
  sharp = (await import("sharp")).default;
  console.log("Using sharp for compression ✓");
} catch {
  console.log("sharp not found — embedding originals (run `npm i -D sharp` for smaller output)");
}

async function readImage(file, { width = 1200, quality = 82, fallback }) {
  const candidates = fallback ? [file, fallback] : [file];
  for (const name of candidates) {
    const full = path.join(IMAGES, name);
    try {
      await fs.access(full);
      const raw = await fs.readFile(full);
      if (!sharp) return { buf: raw, mime: name.endsWith(".png") ? "image/png" : "image/jpeg", name };
      const buf = await sharp(raw)
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();
      return { buf, mime: "image/jpeg", name };
    } catch {
      /* try next candidate */
    }
  }
  return null;
}

const lines = [
  "// AUTO-GENERATED FILE — do not edit by hand.",
  "// Regenerate with:  node scripts/embed-images.mjs",
  "// Images are embedded as data URIs so the build works even if binary files",
  "// are missing from git, and so it runs on any host or sub-path.",
  "",
];

const found = [];
const exportedNames = [];
for (const entry of MAP) {
  const img = await readImage(entry.file, entry);
  if (!img) {
    console.warn(`  ! skipped ${entry.file} (not found in public/images)`);
    continue;
  }
  const dataUri = `data:${img.mime};base64,${img.buf.toString("base64")}`;
  lines.push(`export const ${entry.exportName} = ${JSON.stringify(dataUri)};`);
  exportedNames.push(entry.exportName);
  found.push(`${entry.exportName} ← ${img.name} (${Math.round(img.buf.length / 1024)}KB)`);
}

// Optional: a square portrait crop derived from the hero photo for avatars.
let hasPortrait = false;
if (sharp) {
  for (const name of ["amey-hero.png", "amey-hero.jpg", "helper-hero.png"]) {
    try {
      const raw = await fs.readFile(path.join(IMAGES, name));
      const meta = await sharp(raw).metadata();
      // Crop the upper-centre of the image — works well for both portraits and posters.
      const side = Math.floor(Math.min(meta.width, meta.height) * 0.55);
      const left = Math.max(0, Math.floor((meta.width - side) / 2));
      const top = Math.max(0, Math.floor(meta.height * 0.12));
      const buf = await sharp(raw)
        .extract({ left, top, width: side, height: side })
        .resize({ width: 360, height: 360 })
        .jpeg({ quality: 84, mozjpeg: true })
        .toBuffer();
      lines.push(
        `export const ameyPortrait = ${JSON.stringify(
          `data:image/jpeg;base64,${buf.toString("base64")}`
        )};`
      );
      found.push(`ameyPortrait ← ${name} (square crop, ${Math.round(buf.length / 1024)}KB)`);
      hasPortrait = true;
      break;
    } catch {
      /* try next */
    }
  }
}

// ameyPortrait is imported by components — guarantee it always exists.
if (!hasPortrait) {
  const fallback = exportedNames.includes("ameyPoster")
    ? "ameyPoster"
    : exportedNames.length
      ? exportedNames[0]
      : '""';
  lines.push(`export const ameyPortrait = ${fallback};`);
}

lines.push("");
await fs.mkdir(path.dirname(OUT), { recursive: true });
await fs.writeFile(OUT, lines.join("\n"), "utf8");

console.log("\nWrote", path.relative(ROOT, OUT));
for (const f of found) console.log("  ✓", f);
if (!found.length) {
  console.error("No images found in public/images — nothing was embedded.");
  process.exitCode = 1;
}
