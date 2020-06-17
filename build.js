#!/usr/bin/env node

const { spawnSync } = require("child_process");

process.chdir(__dirname);

spawnSync("sass", ["src/entry.scss", "dist/entry.css"], {
  stdio: "inherit"
});

