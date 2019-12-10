const readFile = require("../lib/ezFs");
const Orbit = require("./Orbit");

// readFile("./test-input.txt")
readFile("./input.txt")
.then(d => {
    const orbit = new Orbit();

    d.split("\r\n").forEach(o => {
        const [ p0, p1 ] = o.split(")");

        // console.log(p0, p1);

        orbit.add(p0, p1);
    });

    console.log(orbit);
    console.log(orbit.numberOfOrbits());
});
