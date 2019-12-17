const asteroid = "#";

function numAsteroids([ cx, cy ], asteroids) {
    const visible = [];

    console.log(cx, cy);

    asteroids.forEach(([ ax, ay ]) => {
        // console.log("roid");
        visible.push(Math.atan((ax - cx) / (ay - cy)));
    });

    return visible.flat().length;
}

require("../lib/ezFs")("./test/input-0.txt").then(d => {
    // console.log(d);
    const asteroids = [];

    d.split("\r\n").forEach((row, rowIdx) => {
        row.split("").forEach((cell, cellIdx) => {
            // cell === asteroid && console.log(cellIdx, rowIdx);
            if (cell !== asteroid) {
                return;
            }

            asteroids.push([ cellIdx, rowIdx ]);
        });
    });

    // console.log(asteroids);

    console.log(numAsteroids(asteroids[0], asteroids.slice(1)));

    // console.log(parsed);

    // parsed.forEach(row => {
    //     row.forEach(cell => {
    //         if (cell !== asteroid) {
    //             return;
    //         }


    //     });
    // })
});
