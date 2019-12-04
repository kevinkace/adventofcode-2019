const readFile = require("../lib/ezRead");

const Grid = require("./Grid");

readFile("./input.txt")
.then(d => {
    const grids = [];

    d.split("\n").forEach((line, idx) => {
        const grid = new Grid(5000);

        console.log(`line ${idx}`);

        grids.push(grid);

        line.split(",").forEach(inst => {
            const dir = inst[0];
            const len = parseInt(inst.slice(1), 10);

            console.log(dir, len);

            grid.addLine(dir, len);
        });
    });

    console.log(grid[0].findCollisions(grid[1]));
});
