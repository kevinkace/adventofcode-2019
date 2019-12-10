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

    numberOfOrbits() {
        let numOrbits = 0;

        each(this.sats, ({ key : sat, value : orbits }) => {
            numOrbits += this.satOrbits(sat);
        });

        return numOrbits;
    }
};
