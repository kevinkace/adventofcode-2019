module.exports = class Grid {
    constructor(offset) {
        this.grid   = [];
        this.offset = offset;

        this.x = offset + 1;
        this.y = offset + 1;

        for (let i = 0; i < offset; i++) {
            this.grid.push(new Array(2 * offset).fill("."));
        }
    }

    addLine(dir, len) {
        switch(dir) {
            case "U" :
            case "R" :
                const currRow = this.getCurrRow();

                for (let i = 0; i < len; i++) {
                    currRow[this.x + i] = "-";
                }
                break;
            case "D" :
            case "L" :
        }
    }

    getCurrRow() {
        return this.grid[this.y];
    }

    toString() {
        return this.grid.map(row => row.join("")).join("\n");
    }
};
