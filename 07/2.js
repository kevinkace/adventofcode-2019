const feedbackAmp = require("./feedbackAmp");
const popAt       = require("../lib/popAt");

const inputFile = "./input.txt";

function iter(prev, curr, cb) {
    if (!cb) {
        cb = curr;
        curr = prev;
        prev = [];
    }

    if (curr.length === 2) {
        cb([...prev, curr[0], curr[1]]);
        cb([...prev, curr[1], curr[0]]);

        return;
    }

    curr.forEach((el, idx) => {
        const others = popAt(curr, idx);

        iter([ ...prev, el ], others, cb);
    });
}

require("../lib/ezFs")(inputFile).then(d => {
    const opcodes = require("../lib/parseCodes")(d);

    let maxOutput = 0;

    iter([ 9, 8, 7, 6, 5 ], (phaseSettings) => {
        const output = feedbackAmp(phaseSettings, opcodes);

        console.log(phaseSettings, output);

        if (output > maxOutput) {
            maxOutput = output;
        }
    });

    console.log(maxOutput);
});
