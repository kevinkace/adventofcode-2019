module.exports = function(obj, cb) {
    let idx = 0;

    for (const key in obj) {
        cb({ key, value : obj[key] }, idx);
    }
};
