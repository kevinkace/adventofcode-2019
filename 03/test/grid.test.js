const Grid = require("../Grid2");

const grid = new Grid(7);

grid.addLine("R", 4);
grid.addLine("U", 3);
grid.addLine("L", 3);

console.log(`${grid}`);


const grid2 = new Grid(7);

grid2.addLine("U", 2);
grid2.addLine("R", 5);
grid2.addLine("D", 5);
grid2.addLine("L", 4);

console.log(`${grid2}`);

const collisions = grid.findCollisionsWith(grid2);

console.log(collisions);