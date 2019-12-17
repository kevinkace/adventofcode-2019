const Intcode = require("./Intcode");

function testPhaseSetting(phaseSetting, prevOutput, opcodes) {
    const intcode = new Intcode(opcodes, [ phaseSetting, prevOutput ]);

    const output = intcode.process();

    return output.pop();
}

module.exports = function ampOutput(phaseSettings, opcodes) {
    let prev = 0;

    phaseSettings.forEach(phaseSetting => {
        prev = testPhaseSetting(phaseSetting, prev, opcodes);
    });

    return prev;
};
