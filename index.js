#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const projectDir = process.argv[2] || "chrome-extension-v3";
const templateDir = path.join(__dirname, "template");

function createDirectoryContents(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath);
      createDirectoryContents(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

fs.mkdirSync(projectDir);
createDirectoryContents(templateDir, projectDir);
console.log(`Created a new Chrome Extension v3 project in ./${projectDir}`);
