const _quantile = require('quantile');

module.exports = (arr, {
    sorted = false,
    fractionDigits = 10,
    quantile = null,
} = {}) => {
    if(!sorted) arr = arr.slice().sort((x, y) => x - y);
    const len = arr.length;
    const sum = arr.reduce((a, b) => a + b, 0);
    const r = {
        min: arr[0],
        max: arr[len - 1],
        sum,
        len,
        avg: sum / len,
    };
    Object.keys(r).forEach(k => {
        r[k] = +r[k].toFixed(fractionDigits);
    });
    if(quantile !== null){
        const q = _quantile(arr, quantile);
        r.quantile = {[quantile]: +q.toFixed(fractionDigits)};
    }
    return r;
};
