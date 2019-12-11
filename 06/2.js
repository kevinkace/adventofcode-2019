const readFile = require("../lib/ezFs");
const Orbit    = require("./Orbit");

readFile("./input.txt")
.then(d => {
    const orbit = new Orbit();

    d.split("\r\n").forEach(o => {
        const [ p0, p1 ] = o.split(")");

        orbit.add(p0, p1);
    });

    console.log(orbit.numberOfOrbits("YOU", "SAN"));
});
