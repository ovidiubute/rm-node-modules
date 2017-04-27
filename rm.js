var childProcess = require("child_process");

module.exports = function() {
  childProcess.execSync("find . -name \"node_modules\" -exec rm -rf '{}' +");
}
