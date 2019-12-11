const last = require("../lib/last");
const each = require("../lib/each");

module.exports = class Orbit {
    constructor() {
        this.sats = {};
    }

    add(p0, p1) {
        this.sats[p1] = this.sats[p0] ? [ p0, ...this.sats[p0] ] : [ p0 ];
    }

    satOrbits(sat) {
        if (!this.sats[sat]) {
            return 0;
        }

        return this.sats[sat].length + this.satOrbits(last(this.sats[sat]));
    }

    numberOfOrbits(s0, s1) {
        const p0 = this.satPath(s0);
        const p1 = this.satPath(s1);

        const commonSat = this.findCommonSat(s0, s1);

        return p0.indexOf(commonSat) + p1.indexOf(commonSat);
    }

    satPath(sat) {
        if (!this.sats[sat]) {
            return [];
        }

        return [ ...this.sats[sat], ...this.satPath(last(this.sats[sat])) ];
    }

    findCommonSat(s0, s1) {
        const p0 = this.satPath(s0);
        const p1 = this.satPath(s1);

        let commonSat;

        p0.some(s => {
            if (p1.includes(s)) {
                commonSat = s;

                return true;
            }
        });

        return commonSat;
    }
};
