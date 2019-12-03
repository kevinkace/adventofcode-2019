module.exports = class Grid {
    constructor(offset) {
        this.grid   = [];
        this.offset = offset;

        this.x = offset;
        this.y = offset;

        for (let i = 0; i < 2 * offset; i++) {
            this.grid.push(new Array(2 * offset).fill("."));
        }

        this.grid[this.y][this.x] = 0;
    }

    addLine(dir, len) {
        switch(dir) {
            case "U" :
                for (let i = 1; i <= len; i++) {
                    this.y--;

                    if (this.currVal === 0) {
                        return;
                    }

                    this.grid[this.y][this.x] = this.currVal === "-" ? "+" : "|";
                }

                break;
            case "R" :
                for (let i = 1; i <= len; i++) {
                    this.x++;

                    if (this.currVal === 0) {
                        return;
                    }

                    this.currRow[this.x] = this.currVal === "|" ? "+" : "-";
                }

                break;
            case "D" :
                for (let i = 1; i <= len; i++) {
                    this.y++;

                    if (this.currVal === 0) {
                        return;
                    }

                    this.grid[this.y][this.x] = this.currVal === "-" ? "+" : "|";
                }

                break;
            case "L" :
                for (let i = 1; i <= len; i++) {
                    this.x--;

                    if (this.currVal === 0) {
                        return;
                    }

                    this.currRow[this.x] = this.currVal === "|" ? "+" : "-";
                }

                break;
        }
    }

    get currVal() {
        return this.grid[this.y][this.x];
    }

    get currRow() {
        return this.grid[this.y];
    }

    toString() {
        return this.grid.map(row => row.join("")).join("\n");
    }
};
