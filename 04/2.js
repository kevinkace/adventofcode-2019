const validate = require("./validate");

const min = 231832;
const max = 767346;

const valid = [];

for (let idx = min; idx <= max; idx++) {
    if (validate(idx)) {
        valid.push(idx);
    }
}

console.log(valid.length);
