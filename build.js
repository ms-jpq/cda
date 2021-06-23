#!/usr/bin/env node

const { spawnSync } = require("child_process");

const proc = spawnSync("sass", ["src/entry.scss", "dist/entry.css"], {
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(proc.status || undefined);

