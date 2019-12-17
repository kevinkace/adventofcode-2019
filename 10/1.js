const popAt = require("../lib/popAt");

const asteroid = "#";

function getNumAsteroids([ cx, cy ], asteroids) {
    const visible = new Set();

    asteroids.forEach(([ ax, ay ]) => {
        visible.add(Math.atan2(ay - cy, ax - cx));
    });

    return visible.size;
}

require("../lib/ezFs")("./input.txt").then(d => {
    const asteroids = [];
    const lineBreak = d.includes("\n") ? "\n" : "\r\n";

    let max = 0,
        maxCoord;

    d.split(lineBreak).forEach((row, rowIdx) => {
        row.split("").forEach((cell, cellIdx) => {
            if (cell !== asteroid) {
                return;
            }

            asteroids.push([ cellIdx, rowIdx ]);
        });
    });

    asteroids.forEach((asteroid, idx) => {
        const numAsteroids = getNumAsteroids(asteroid, popAt(asteroids, idx));

        if (numAsteroids > max) {
            max = numAsteroids;
            maxCoord = asteroid;
        }
    });

    console.log(max, maxCoord);
});
