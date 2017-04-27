const execSync = require("child_process").execSync;

module.exports = function() {
  execSync("find . -name \"node_modules\" -exec rm -rf '{}' +");
}
