const double = /.*([0-9])\1.*/;
const triple = /.*([0-9])\1\1.*/;

function validOrder(idx) {
    return !`${idx}`.split("").some((char, idx, arr) => {
        if (idx && char < arr[idx - 1]) {
            return true;
        }
    });
}

module.exports = function(idx) {
    if (!validOrder(idx) || !double.test(idx)) {
        return false;
    }

    if (!triple.test(idx)) {
        return true;
    }

    let tripMatch = `${idx}`.match(triple);

    while (tripMatch) {
        const tripChar = tripMatch[1];
        idx = `${idx}`.replace(new RegExp(`(${tripChar})\\1{2,}`), "");

        tripMatch = `${idx}`.match(triple);
    }

    return double.test(idx);
}
