const min = 231832;
const max = 767346;

const valid = [];

for (let idx = min; idx <= max; idx++) {

    const isInvalid = `${idx}`.split("").some((char, idx, arr) => {
        if (!idx || char >= arr[idx - 1]) {
            return;
        }

        return true;
    });

    if (!isInvalid && /.*([0-9])\1.*/.test(idx)) {
        valid.push(idx);
    }
}

console.log(valid.length);
