module.exports = function parseFile(path) {
    return require("./ezFs")(path).then(require("./parseCodes"));
};
