module.exports = class Grid {
    constructor(offset) {
        this.grid   = [];

        this.x = 0;
        this.y = 0;

        this.addPoint({ x : this.x, y : this.y });
    }

    addLine(dir, len) {
        let xValue,
            yValue;

        switch(dir) {
            case "U" :
                xValue = 0;
                yValue = 1;
                break;
            case "R" :
                xValue = 1;
                yValue = 0;
                break;
            case "D" :
                xValue = 0;
                yValue = -1;
                break;
            case "L" :
                xValue = -1;
                yValue = 0;
                break;
        }

        for (let idx = 0; idx < len; idx++) {
            this.x += xValue;
            this.y += yValue;

            this.addPoint();
        }
    }

    addPoint() {
        this.grid.push({ x : this.x, y : this.y });
    }

    findCollisionsWith({ grid }) {
        const collisions = [];

        this.grid.forEach(({ x, y }, idx0) => {
            grid.forEach(({ x : gx, y : gy }, idx1) => {
                if ((x || y) && x === gx && y === gy) {
                    collisions.push({ x, y, length : idx0 + idx1 });
                }
            })
        });

        return collisions;
    }

    toString() {
        return JSON.stringify(this.grid, null, 2);
    }
};
