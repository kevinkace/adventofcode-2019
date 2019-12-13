const readFile = require("../lib/ezFs");
const Intcode  = require("./Intcode");

readFile("./input.txt")
.then(d => {
    const intcode = new Intcode(d, "1");

    intcode.process();

    // console.log(`${intcode}`);
});
