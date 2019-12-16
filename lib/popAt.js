module.exports = function popAt(arr, idx) {
    if ( idx >= arr.length) {
        return arr;
    }

    return [ ...arr.slice(0, idx), ...arr.slice(idx + 1, arr.length)];
};
