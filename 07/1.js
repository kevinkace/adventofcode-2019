const ampOutput = require("./ampOutput");
const popAt   = require("../lib/popAt");

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

require("../lib/ezFs")("./input.txt").then(d => {
    const opcodes = require("../lib/parseCodes")(d);

    let maxOutput = 0;

    iter([ 4, 3, 2, 1, 0 ], (phaseSettings) => {
        const output = ampOutput(phaseSettings, opcodes);

        // console.log(phaseSettings, output);

        if (output > maxOutput) {
            maxOutput = output;
        }
    });

    console.log(maxOutput);
});
