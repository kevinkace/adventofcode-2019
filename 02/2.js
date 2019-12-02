const readFile = require("../lib/ezRead");

const opCodeSize = 4;

function calcOpCode(opCode, pos1, pos2, pos3, opCodes) {
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

function processOpCodes(opCodes) {
    let start = 0,
        end = 4,
        [ opCode, pos1, pos2, pos3 ] = getOpCodes(start, end, opCodes),
        idx = 0;

    while (opCode !== 99 && idx < 1000) {
        calcOpCode(opCode, pos1, pos2, pos3, opCodes);

        start += opCodeSize;
        end += opCodeSize;

        [ opCode, pos1, pos2, pos3 ] = getOpCodes(start, end, opCodes);

        idx++;
    }

    return opCodes;
}

function checkSolution(opCodes, noun, verb) {
    opCodes[1] = noun;
    opCodes[2] = verb;

    processOpCodes(opCodes);

    // console.log("n", noun, "v", verb, "s", opCodes[0]);

    return opCodes[0];
}

const solution = 19690720;
// const solution = 8017076;

readFile("./input.txt")
.then(d => {
    const ogOpCodes = d.split(",").map(d => parseInt(d, 10));

    for (let i = 0; i < 50; i++) {
        for (let j = 0; j <= i; j++) {
            if (checkSolution(ogOpCodes.slice(), i, j) === solution) {
                return i * 100 + j;
            }

            if (i !== j && checkSolution(ogOpCodes.slice(), j, i) === solution) {
                return j * 100 + i;
            }
        }
    }

    return "not found";
})
.then(console.log);
