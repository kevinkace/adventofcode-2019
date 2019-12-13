const Intcode = require("./Intcode");

function test() {
    const intcode = new Intcode("");

    console.log(intcode.parseOpcode(1002));
}

test();
