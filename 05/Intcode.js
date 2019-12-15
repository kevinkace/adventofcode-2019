function parseCodes(codes) {
    return codes.split(",").map(n => parseInt(n, 10));
}

module.exports = class Intcode {
    constructor(opcodes, input, maxIterations = 200) {
        this.opcodes = parseCodes(opcodes);
        this.maxIterations = maxIterations;

        if (input) {
            this.input = parseCodes(input);
        }
    }

    setPosition(idx, value) {
        this.opcodes[idx] = value;
    }

    getPosition(idx) {
        return this.opcodes[idx];
    }

    process() {
        let idx = 0, iteration = -1, outputIteration;
        let instruction = this.opcodes[idx];
        let input;

        while (instruction !== undefined && iteration <= this.maxIterations) {
            iteration++;

            const p1 = this.opcodes[idx + 1];
            const p2 = this.opcodes[idx + 2];
            const p3 = this.opcodes[idx + 3];

            const [ inst, p1Mode, p2Mode ] = this.parseOpcode(instruction);

            const value1 = p1Mode ? p1 : this.opcodes[p1];
            const value2 = p2Mode ? p2 : this.opcodes[p2];

            // console.log(`i: ${iteration}, inst: ${instruction}, p: ${p1} ${p2} ${p3}, m: ${p1Mode} ${p2Mode}, v: ${value1} ${value2}`);

            switch (inst) {
                case 1:
                    this.opcodes[p3] = value1 + value2;

                    idx += 4;

                    break;

                case 2:
                    this.opcodes[p3] = value1 * value2;

                    idx += 4;

                    break;

                case 3:
                    input = this.input.pop();

                    this.opcodes[p1] = input;

                    idx += 2;

                    break;

                case 4:
                    outputIteration = iteration;
                    console.log(value1);

                    idx += 2;

                    break;

                case 5:
                    idx = value1 ? value2 : idx + 3;

                    break;

                case 6:
                    idx = !value1 ? value2 : idx + 3;

                    break;

                case 7:
                    this.opcodes[p3] = value1 < value2 ? 1 : 0;

                    idx += 4;

                    break;

                case 8:
                    this.opcodes[p3] = value1 === value2 ? 1 : 0;

                    idx += 4;

                    break;

                case 99:
                    // console.log(this.opcodes.join(", "));
                    console.log(iteration === outputIteration + 1 ? "DONE" : "ERROR");

                    return;

                    break;

                default:
                    console.log("Unhandled instruction");

                    return;

                    break;
            }

            instruction = this.opcodes[idx];
        }

        if (iteration > this.maxIterations) {
            console.log("Error: max iterations");
        }
    }

    parseOpcode(toParse) {
        toParse = `${toParse}`.padStart(5, "0");

        const opcode = parseInt(toParse.slice(3, 5), 10);
        const p1Mode = parseInt(toParse.slice(2, 3), 10);
        const p2Mode = parseInt(toParse.slice(1, 2), 10);

        return [ opcode, p1Mode, p2Mode ];
    }

    toString() {
        return this.opcodes.join(",");
    }
}
