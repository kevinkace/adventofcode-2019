const Intcode = require("./Intcode2");

function testPhaseSetting(phaseSetting, prevOutput, opcodes) {

    // console.log(phaseSetting, prevOutput);

    const intcode = new Intcode(opcodes, [ phaseSetting, prevOutput ]);

    const output = intcode.process();

    return output.pop();
}

module.exports = function ampOutput(phaseSettings, opcodes) {
    let output = 0,
        iteration    = 0;

    const intcodes = phaseSettings.map(phaseSetting => new Intcode(opcodes, [ phaseSetting ]));

    // intcodes[0].process([ phaseSettings[0], 0]);

    while (typeof output !== "object" && iteration < 100) {
        const idx = iteration % phaseSettings.length;

        output = intcodes[idx].process(output);

        // console.log(iteration, phaseSettings[idx], output);

        iteration++;
    }

    if (iteration >= 100) {
        console.log("max iterations");

        return;
    }

    // console.log(output);

    return output.output;

    // phaseSettings.forEach(phaseSetting => {
    //     prev = testPhaseSetting(phaseSetting, prev, opcodes);
    // });

    // return prev;
};
