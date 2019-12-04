const readFile = require("../lib/ezRead");

const Grid = require("./Grid");

readFile("./input.txt")
.then(d => {
    const grids = [];

    d.split("\n").forEach((line, idx) => {
        const grid = new Grid(9000);

        console.log(`line ${idx}`);

        grids.push(grid);

        line.split(",").forEach(inst => {
            const dir = inst[0];
            const len = parseInt(inst.slice(1), 10);

            // console.log(dir, len);

            grid.addLine(dir, len);
        });
    });

    const collisions = grids[0].findCollisionsWith(grids[1]);

    const shortestDist = collisions.reduce((smallest, { x, y }) => {
        const dist = Math.abs(x) + Math.abs(y);

        return smallest > dist ? dist : smallest;
    }, Number.MAX_SAFE_INTEGER);

    console.log(shortestDist);
});
