module.exports = class Intcode {
    constructor(opcodes, { input = [], maxIterations = 200, base = 0 } = {}) {
        this.opcodes       = opcodes.slice();
        this.maxIterations = maxIterations;
        this.input         = input;
        this.idx           = 0;
        this.base          = base;
    }

    process(input) {
        let iteration = -1,

            instruction = this.opcodes[this.idx];

        if (input) {
            this.addInput(input);
        }

        while (instruction !== undefined && iteration <= this.maxIterations) {
            iteration++;

            const [ inst, p1Mode, p2Mode, p3Mode ] = this.parseOpcode(instruction);

            const p1Idx = this.getIdx(1, p1Mode);
            const p2Idx = this.getIdx(2, p2Mode);
            const p3Idx = this.getIdx(3, p3Mode);

            const value1 = this.opcodes[p1Idx];
            const value2 = this.opcodes[p2Idx];

            // console.log(`i: ${iteration}, inst: ${instruction}, p: ${p1} ${p2} ${p3}, m: ${p1Mode} ${p2Mode}, v: ${value1} ${value2}`);

            switch (inst) {
                // addition
                case 1:
                    this.opcodes[p3Idx] = value1 + value2;

                    this.idx += 4;

                    break;

                // multiplication
                case 2:
                    this.opcodes[p3Idx] = value1 * value2;

                    this.idx += 4;

                    break;

                // input
                case 3:
                    if (!this.input.length) {
                        console.log("input error");

                        return;
                    }

                    this.opcodes[p1Idx] = this.input.shift();

                    this.idx += 2;

                    break;

                // output
                case 4:
                    this.idx += 2;

                    return value1;

                // skip if true
                case 5:
                    this.idx = value1 ? value2 : this.idx + 3;

                    break;

                // skip if false
                case 6:
                    this.idx = !value1 ? value2 : this.idx + 3;

                    break;

                // less than
                case 7:
                    this.opcodes[p3Idx] = value1 < value2 ? 1 : 0;

                    this.idx += 4;

                    break;

                // equal
                case 8:
                    this.opcodes[p3Idx] = value1 === value2 ? 1 : 0;

                    this.idx += 4;

                    break;

                // set base
                case 9:
                    this.base += value1;

                    this.idx += 2;

                    break;

                // done
                case 99:
                    return { output : input };

                // nothing?
                default:
                    console.log("Unhandled instruction");

                    return;
            }

            instruction = this.opcodes[this.idx];
        }

        if (iteration > this.maxIterations) {
            console.log("Error: max iterations", iteration);
        }
    }

    addInput(input) {
        this.input = this.input.concat(Array.isArray(input) ? input : [ input ]);
        // this.input.push(...(Array.isArray(input) ? input : [ input ]));
    }

    parseOpcode(toParse) {
        toParse = `${toParse}`.padStart(5, "0");

        const opcode = parseInt(toParse.slice(3, 5), 10);
        const p1Mode = parseInt(toParse.slice(2, 3), 10);
        const p2Mode = parseInt(toParse.slice(1, 2), 10);
        const p3Mode = parseInt(toParse.slice(0, 1), 10);

        return [ opcode, p1Mode, p2Mode, p3Mode ];
    }

    getIdx(idxOffset, paramMode) {
        switch (paramMode) {
            // position
            case 0:
                return this.opcodes[this.idx + idxOffset];
            // value
            case 1:
                return this.idx + idxOffset;
            // relative (position & base)
            case 2:
                return this.opcodes[this.idx + idxOffset] + this.base;

            default:
                console.log("error getval");

                return;
        }
    }

    toString() {
        return this.opcodes.join(",");
    }
};
