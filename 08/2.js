const w = 25;
const h = 6;

require("../lib/ezFs")("./input.txt").then(d => {
    const parsed = d.split("").map(el => parseInt(el, 10));

    const layers = parsed.reduce((acc, el, idx) => {
        // const layer = Math.floor(idx / (w * h));
        const row   = Math.floor(idx / w) % 6;
        const col   = idx % w;

        // idx < 200 && console.log(idx, row, col);

        // acc[layer]      = acc[layer]      || [];
        acc[row] = acc[row] || [];

        const value = acc[row][col];

        acc[row][col] = (value === undefined || value === 2) ? el : value;

        return acc;
    }, []);

    const joined = layers.map(row => row.map(cell => (cell ? "█" : " ")).join("")).join("\n");

    console.log(joined);
});
