const w = 25;
const h = 6;

require("../lib/ezFs")("./input.txt").then(d => {
    const parsed = d.split("").map(el => parseInt(el, 10));

    const layers = parsed.reduce((acc, el, idx) => {
        // const layer = Math.floor(idx / (w * h));
        const row   = Math.floor(idx / w);
        const col   = idx % w;

        console.log(row, col);

        // acc[layer]      = acc[layer]      || [];
        acc[row] = acc[row] || [];

        const value = acc[row][col];

        acc[row][col] = (value === undefined || value === 2) ? el : value;

        return acc;
    }, []);

    // console.log(layers);
});
