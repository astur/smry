const _quantile = require('quantile');
const arfy = require('arfy');

module.exports = (arr, {
    sorted = false,
    fractionDigits = 10,
    quantile = [],
} = {}) => {
    if(!sorted) arr = arr.slice().sort((x, y) => x - y);
    quantile = arfy(quantile);
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
    quantile.forEach(q => {
        if(!r.quantile) r.quantile = {};
        r.quantile[q] = +_quantile(arr, q).toFixed(fractionDigits);
    });
    return r;
};
