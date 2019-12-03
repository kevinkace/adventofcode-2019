const readFile = require("../lib/ezRead");

readFile("./input.txt")
.then(d => {
    const grid = [];

    d.split("\n").forEach(line => {
        line.split(",").forEach(inst => {
            const dir = inst[0];
            const len = parseInt(inst.slice(1), 10);

            console.log(dir, len);
        });
    })

})
