const readFile = require("../../lib/ezFs");

const Intcode = require("../Intcode");

// readFile("./input.txt")
// readFile("../02/input.txt")
// readFile("./input.test.2.txt")
readFile("./input.test.3.txt")
.then(d => {
    const intcode = new Intcode(d, "13");

    // intcode.setPosition(1, 12);
    // intcode.setPosition(2, 2);

    // console.log(`${intcode}`);

    intcode.process();

    console.log(`${intcode}`);

    // console.log(intcode.getPosition(0));
});
