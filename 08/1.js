const w = 25;
const h = 6;

require("../lib/ezFs")("./input.txt").then(d => {
    const parsed = d.split("").map(el => parseInt(el, 10));
    const zerosPerLayer = [];
    const onesPerLayer  = [];
    const twosPerLayer  = [];

    parsed.forEach((el, idx) => {
        const layer = Math.floor(idx / (w * h));

        switch (el) {
            case 0:
                zerosPerLayer[layer] = zerosPerLayer[layer] ? zerosPerLayer[layer] + 1 : 1;

                break;
            case 1:
                onesPerLayer[layer] = onesPerLayer[layer] ? onesPerLayer[layer] + 1 : 1;

                break;
            case 2:
                twosPerLayer[layer] = twosPerLayer[layer] ? twosPerLayer[layer] + 1 : 1;

                break;

            default:
                break;
        }
    });

    const minZeros = Math.min(...zerosPerLayer);
    const minZerosLayerIdx = zerosPerLayer.indexOf(minZeros);

    console.log(onesPerLayer[minZerosLayerIdx] * twosPerLayer[minZerosLayerIdx]);
});
