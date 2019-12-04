const Grid = require("./Grid");

const grid = new Grid(6);

grid.addLine("R", 4);
grid.addLine("U", 3);
grid.addLine("L", 3);


const grid2 = new Grid(6);

grid2.addLine("U", 2);
grid2.addLine("R", 5);
grid2.addLine("D", 6);
grid2.addLine("L", 4);

console.log(`${grid}`);
console.log(`${grid2}`);

const collisions = grid.findCollisionsWith(grid2);

console.log(collisions);