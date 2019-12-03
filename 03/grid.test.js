const Grid = require("./Grid");

const grid = new Grid(10);

grid.addLine("R", 3);
grid.addLine("U", 3);
grid.addLine("L", 3);
grid.addLine("D", 1);
grid.addLine("R", 4);

console.log(`${grid}`);