#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const cwd = dirname(fileURLToPath(new URL(import.meta.url)));

const { error, status } = spawnSync(
  "sass",
  ["src/entry.scss", "dist/entry.css"],
  {
    stdio: "inherit",
    cwd,
  }
);

if (error) {
  throw error;
}

process.exitCode = status ?? 1;
