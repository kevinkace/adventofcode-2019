const popAt = require("../lib/popAt");
const each  = require("../lib/each");

const inputFile = "./input.txt";
const asteroid = "#";
const up       = Math.atan2(1, 0);

function getNumAsteroids([ cx, cy ], asteroids) {
    const visible = new Set();

    asteroids.forEach(([ ax, ay ]) => {
        visible.add(Math.atan2(cy - ay, cx - ax));
    });

    return visible.size;
}

function getAsteroidsByAngle([ cx, cy ], asteroids) {
    const asteroidsByAngle = {};

    asteroids.forEach(([ ax, ay ]) => {
        const deltaY = cy - ay;
        const deltaX = ax - cx; // can't explain that
        const angle = Math.atan2(deltaY, deltaX);

        // init angle group
        if (!asteroidsByAngle[angle]) {
            asteroidsByAngle[angle] = [];
        }

        asteroidsByAngle[angle].push({
            distance : Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)),
            coord : [ ax, ay ]
        });
    });

    // sort each asteroid in a line of sight by distance
    each(asteroidsByAngle, ({ value : roids }) => {
        roids.sort((r0, r1) => (r0.distance > r1.distance ? -1 : 1));
    });

    return asteroidsByAngle;
}

require("../lib/ezFs")(inputFile).then(d => {
    const asteroids = [];
    const lineBreak = d.includes("\n") ? "\n" : "\r\n";

    let max = 0,
        maxIdx;

    // get coords of each asteroid
    d.split(lineBreak).forEach((row, rowIdx) => {
        row.split("").forEach((cell, cellIdx) => {
            if (cell !== asteroid) {
                return;
            }

            asteroids.push([ cellIdx, rowIdx ]);
        });
    });

    // get asteroid with max visibility
    asteroids.forEach((asteroid, idx) => {
        const numAsteroids = getNumAsteroids(asteroid, popAt(asteroids, idx));

        if (numAsteroids > max) {
            max      = numAsteroids;
            maxIdx   = idx;
        }
    });

    // group asteroids by angle
    const asteroidsByAngle = getAsteroidsByAngle(asteroids[maxIdx], popAt(asteroids, maxIdx));
    // sort by angle (180 > -180)
    const asteroidEntries  = Object.entries(asteroidsByAngle).sort((a, b) => {
        a[0] = a[0].length ? Number(a[0]) : a[0];
        b[0] = b[0].length ? Number(b[0]) : b[0];

        return a[0] < b[0] ? 1 : -1;
    });

    let upIdx;

    // find angle closest to straight up (where we start firing from)
    asteroidEntries.some(([ angle ], idx) => {
        if (angle <= up) {
            upIdx = idx;

            return true;
        }

        return false;
    });

    // cut asteroids list with up first
    let wrapped   = [ ...asteroidEntries.slice(upIdx), ...asteroidEntries.slice(0, upIdx) ],
        idx       = 0,
        iteration = -1;

    const popped = [];

    while (wrapped.length && iteration < 1000) {
        iteration++;

        const roids = wrapped[idx][1];

        popped.push(roids.pop());

        if (!roids.length) {
            wrapped = popAt(wrapped, idx);
        } else {
            // don't increment if removing curr angle
            idx++;
        }

        idx = idx >= wrapped.length ? 0 : idx;
    }

    if (iteration >= 1000) {
        console.log("error max iterations");
    }

    console.log(popped[199].coord[0] * 100 + popped[199].coord[1]);
});
