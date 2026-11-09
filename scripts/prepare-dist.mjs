// Copies the web calculator (the same files GitHub Pages serves) into dist/ for the desktop build.
import { rmSync, mkdirSync, cpSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
for (const p of ["index.html", "en", "icons", "manifest.webmanifest"]) cpSync(p, `dist/${p}`, { recursive: true });
console.log("dist/ ready");
