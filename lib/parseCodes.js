module.exports = function parseCodes(codes) {
    return codes.split(",").map(n => parseInt(n, 10));
};
