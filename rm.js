#! /usr/bin/env node

var childProcess = require("child_process");

var execRm = function() {
  childProcess.execSync("find . -name \"node_modules\" -exec rm -rf '{}' +");
}

execRm();

