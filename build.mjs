#!/usr/bin/env node

import { dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const top_lv = dirname(fileURLToPath(import.meta.url));

const proc = spawnSync("sass", ["src/entry.scss", "dist/entry.css"], {
  stdio: "inherit",
  cwd: top_lv,
});

process.exitCode = proc.status;

