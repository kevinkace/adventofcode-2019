const Intcode = require("./Intcode");

// const inputFile = "./test/input-0.txt";
const inputFile = "./input.txt";

require("../lib/parseFile")(inputFile).then(opcodes => {
    const boost = new Intcode(opcodes, { input : [ 1 ] });

    console.log(boost.process());
});
