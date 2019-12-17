const Intcode = require("./Intcode");

const input = "./input.txt";

require("../lib/parseFile")(input).then(opcodes => {
    const intcode = new Intcode(opcodes);
    const grid = [{
        coord : [ 0, 0 ],
        color : 0
    }];

    const cw  = 1;
    const ccw = 0;

    const maxIterations = 500;
    let iteration = -1;
    let output = 0;
    let dir = "up";

    while (typeof output !== "object" && iteration <= maxIterations) {
        iteration++;

        output = intcode.process(output);



    }

    if (iteration >= maxIterations) {
        console.log("error, max iterations");
    }

    // console.log(`${intcode}`);
});
