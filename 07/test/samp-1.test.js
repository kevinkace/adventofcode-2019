const feedbackAmp = require("../feedbackAmp");

// const inputFile = "./samp-0.txt";
const inputFile = "./samp-1.txt";

require("../../lib/ezFs")(inputFile).then(d => {
    const opcodes = require("../../lib/parseCodes")(d);

    console.log(feedbackAmp([ 9, 8, 7, 6, 5 ], opcodes));
});
