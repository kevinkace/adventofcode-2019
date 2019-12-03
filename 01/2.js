const readFile = require("../lib/ezRead");

function fuelForMass(mass) {
    const fuel =  Math.floor(mass / 3) - 2;

    if (fuel <= 0) {
        return 0;
    }

    return fuel + fuelForMass(fuel);
}

readFile("./input.txt", "utf8")
.then(d =>
    d.split("\n")
        .map(massStr => parseInt(massStr, 10))
        .reduce((sum, mass) => sum + fuelForMass(mass), 0)
)
.then(console.log);
