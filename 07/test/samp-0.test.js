const ampOutput = require("../ampOutput");

require("../../lib/ezFs")("./samp-0.txt").then(d => {
    const opcodes = require("../../lib/parseCodes")(d);

    console.log(ampOutput([ 4, 3, 2, 1, 0 ], opcodes));
});