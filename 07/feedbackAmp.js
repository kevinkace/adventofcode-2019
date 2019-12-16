const Intcode = require("./Intcode2");

module.exports = function ampOutput(phaseSettings, opcodes) {
    let output    = 0,
        iteration = 0;

    const intcodes = phaseSettings.map(phaseSetting => new Intcode(opcodes, [ phaseSetting ]));

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
};
