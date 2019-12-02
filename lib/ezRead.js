const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

module.exports = function ezRead(file) {
    return readFile(file, "utf8");
};
