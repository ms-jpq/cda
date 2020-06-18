#!/usr/bin/env node

const { spawnSync } = require("child_process");

process.chdir(__dirname);

const proc = spawnSync("sass", ["src/entry.scss", "dist/entry.css"], {
  stdio: "inherit"
});

process.exit(proc.status || undefined)

