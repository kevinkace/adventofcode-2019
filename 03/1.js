const readFile = require("../lib/ezRead");

const Grid = require("./Grid2");

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

            grid.addLine(dir, len);
        });
    });

    // console.log("g0l", grids[0].grid.length, "g1l", grids[1].grid.length);

    const collisions = grids[0].findCollisionsWith(grids[1]);

    // console.log("collisions", collisions);

    const shortestDist = collisions.reduce(({ nearest, shortest }, { x, y, length }) => {
        const dist = Math.abs(x) + Math.abs(y);

        return {
            nearest : nearest > dist ? dist : nearest,
            shortest : shortest > length ? length : shortest
        };
    }, { nearest : Number.MAX_SAFE_INTEGER, shortest : Number.MAX_SAFE_INTEGER });

    console.log("collisions", shortestDist);
});
