const cmd = require('node-cmd');

module.exports = function (file, resultFile) {
  return new Promise((resolve) => {
    cmd.get(
      `./pdftk/bin/pdftk ${file} output ${resultFile} owner_pw test`,
      (data) => {
        resolve(data)
      }
    );
  })
}
