const readFile = require("../lib/ezRead");

function processOpCode(opCode, pos1, pos2, pos3, opCodes) {
    if (opCode === 1) {
        opCodes[pos3] = opCodes[pos1] + opCodes[pos2];
    }
    if (opCode === 2) {
        opCodes[pos3] = opCodes[pos1] * opCodes[pos2];
    }
}

function getOpCodes(start, end, opCodes) {
    return opCodes.slice(start, end);
}

readFile("./input.txt")
.then(d => {
    const opCodes = d.split(",").map(d => parseInt(d, 10));
    const opCodeSize = 4;

    opCodes[1] = 12;
    opCodes[2] = 2;

    let start = 0,
        end = 4,
        [ opCode, pos1, pos2, pos3 ] = getOpCodes(start, end, opCodes),
        idx = 0;

    while (opCode !== 99 && idx < 1000) {
        processOpCode(opCode, pos1, pos2, pos3, opCodes);

        start += opCodeSize;
        end += opCodeSize;

        [ opCode, pos1, pos2, pos3 ] = getOpCodes(start, end, opCodes);

        idx++;
    }

    console.log(opCodes);
});
