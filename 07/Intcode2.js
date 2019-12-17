module.exports = class Intcode {
    constructor(opcodes, input, maxIterations = 200) {
        this.opcodes       = opcodes.slice();
        this.maxIterations = maxIterations;
        this.input         = input;
        this.idx           = 0;
    }

    setPosition(idx, value) {
        this.opcodes[idx] = value;
    }

    getPosition(idx) {
        return this.opcodes[idx];
    }

    process(input) {
        let iteration = -1,

            instruction = this.opcodes[this.idx];

        this.input.push(input);

        while (instruction !== undefined && iteration <= this.maxIterations) {
            iteration++;

            const p1 = this.opcodes[this.idx + 1];
            const p2 = this.opcodes[this.idx + 2];
            const p3 = this.opcodes[this.idx + 3];

            const [ inst, p1Mode, p2Mode ] = this.parseOpcode(instruction);

            const value1 = p1Mode ? p1 : this.opcodes[p1];
            const value2 = p2Mode ? p2 : this.opcodes[p2];

            // console.log(`i: ${iteration}, inst: ${instruction}, p: ${p1} ${p2} ${p3}, m: ${p1Mode} ${p2Mode}, v: ${value1} ${value2}`);

            switch (inst) {
                case 1:
                    this.opcodes[p3] = value1 + value2;

                    this.idx += 4;

                    break;

                case 2:
                    this.opcodes[p3] = value1 * value2;

                    this.idx += 4;

                    break;

                case 3:
                    this.opcodes[p1] = this.input.shift();
                    // console.log("input", this.opcodes[p1]);

                    this.idx += 2;

                    break;

                case 4:
                    this.idx += 2;

                    return value1;

                case 5:
                    this.idx = value1 ? value2 : this.idx + 3;

                    break;

                case 6:
                    this.idx = !value1 ? value2 : this.idx + 3;

                    break;

                case 7:
                    this.opcodes[p3] = value1 < value2 ? 1 : 0;

                    this.idx += 4;

                    break;

                case 8:
                    this.opcodes[p3] = value1 === value2 ? 1 : 0;

                    this.idx += 4;

                    break;

                case 99:
                    return { output : input };

                default:
                    console.log("Unhandled instruction");

                    return;
            }

            instruction = this.opcodes[this.idx];
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
};
