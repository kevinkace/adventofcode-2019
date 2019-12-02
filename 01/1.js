const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

function fuelForMass(massStr) {
    return Math.floor(parseInt(massStr, 10) / 3) - 2;
}

readFile("./input.txt", "utf8")
.then(d =>
    d.split("\n").reduce(
        (sum, mass) => sum + fuelForMass(mass),
        0
    )
)
.then(console.log);
