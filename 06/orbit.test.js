const readFile = require("../lib/ezFs");
const Orbit    = require("./Orbit");

function test0() {
    const orbit = new Orbit();

    orbit.add("com", "b");
    orbit.add("b", "c");

    console.log("test");
    console.log(orbit);
    console.log(orbit.numberOfOrbits());
}

function test1() {
    readFile("./test-input.txt")
    .then(d => {
        const orbit = new Orbit();

        d.split("\r\n").forEach(o => {
            const [p0, p1] = o.split(")");

            orbit.add(p0, p1);
        });

        console.log(orbit);
        console.log(orbit.numberOfOrbits());
    });
}

function test2() {
    readFile("./test-input-2.txt")
    .then(d => {
        const orbit = new Orbit();

        d.split("\r\n").forEach(o => {
            const [p0, p1] = o.split(")");

            orbit.add(p0, p1);
        });

        console.log(orbit);
        console.log(orbit.numberOfOrbits());
    });
}

// test0();

// test1();

test2();
