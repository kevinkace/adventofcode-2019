module.exports = class Grid {
    constructor(offset) {
        this.grid   = [];
        this.offset = offset;

        this.x = offset;
        this.y = offset;

        for (let i = 0; i < 2 * offset; i++) {
            this.grid.push(".".repeat(2 * offset));
        }

        this.setVal(0);
    }

    addLine(dir, len) {
        switch(dir) {
            case "U" :
                for (let i = 1; i <= len; i++) {
                    this.y--;

                    if (this.currVal === 0) {
                        return;
                    }

                    // this.grid[this.y][this.x] = this.currVal === "-" ? "+" : "|";
                    this.setVal(this.currVal === "-" ? "+" : "|");
                }

                break;
            case "R" :
                for (let i = 1; i <= len; i++) {
                    this.x++;

                    if (this.currVal === 0) {
                        return;
                    }

                    // this.currRow[this.x] = this.currVal === "|" ? "+" : "-";
                    this.setVal(this.currVal === "|" ? "+" : "-");
                }

                break;
            case "D" :
                for (let i = 1; i <= len; i++) {
                    this.y++;

                    if (this.currVal === 0) {
                        return;
                    }

                    // this.grid[this.y][this.x] = this.currVal === "-" ? "+" : "|";
                    this.setVal(this.currVal === "-" ? "+" : "|")
                }

                break;
            case "L" :
                for (let i = 1; i <= len; i++) {
                    this.x--;

                    if (this.currVal === 0) {
                        return;
                    }

                    // this.currRow[this.x] = this.currVal === "|" ? "+" : "-";
                    this.setVal(this.currVal === "|" ? "+" : "-");
                }

                break;
        }
    }

    setVal(char) {
        const row = this.grid[this.y];

        this.grid[this.y] = row.substr(0, this.x) + char + row.substr(this.x + 1);
    }

    findCollisionsWith({ grid }) {
        const collisions = [];
        const wires = [ "|", "-", "+" ];

        this.grid.forEach((row, y) => {
            for (let x = 0; x < row.length; x++) {
                if (wires.includes(row.charAt(x)) && wires.includes(grid[y].charAt(x))) {
                    collisions.push({ x : x - this.offset, y : y - this.offset });
                }
            }
            // row.forEach((cell, x) => {
            //     if (wires.includes(cell) && wires.includes(grid.grid[y][x])) {
            //         collisions.push({ x, y });
            //     }
            // });
        });

        return collisions;
    }

    get x() {
        return this._x;
    }

    set x(v) {
        this._x = v;

        if (this.x < 0 || (this.x > (2 * this.offset) - 1)) {
            throw new Error(`Added line outside bounds, x: ${this.x}`);
        }
    }

    get y() {
        return this._y;
    }

    set y(v) {
        this._y = v;

        if (this.y < 0 || (this.y > (2 * this.offset) - 1)) {
            throw new Error(`Added line outside bounds, y: ${this.y}`);
        }
    }

    get currVal() {
        return this.grid[this.y].charAt(this.x);
    }

    get currRow() {
        return this.grid[this.y];
    }

    toString() {
        return this.grid.join("\n");
    }
};
