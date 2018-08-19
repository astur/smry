const _quantile = require('quantile');
const arfy = require('arfy');
const type = require('easytype');

module.exports = (a, {
    sorted = false,
    fractionDigits = 10,
    quantile = [],
} = {}) => {
    if(!type.isArray.ofNumbers(a) || a.length === 0){
        throw new TypeError('Expected array of numbers');
    }
    if(!type.isNumber(fractionDigits)){
        throw new TypeError('Expected fractionDigits is number');
    }
    if(fractionDigits > 20 || fractionDigits < 0){
        throw new RangeError('Expected fractionDigits is from 0 to 20');
    }

    const q = arfy(quantile);
    if(!type.isArray.ofNumbers(q)){
        throw new TypeError('Expected quantile is number or array of numbers');
    }
    if(q.some(q => q <= 0 || q >= 1)){
        throw new RangeError('Expected fractionDigits is between 0 and 1');
    }

    const arr = sorted ? a : a.slice().sort((x, y) => x - y);

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
    q.forEach(q => {
        if(!r.quantile) r.quantile = {};
        r.quantile[q] = +_quantile(arr, q).toFixed(fractionDigits);
    });
    return r;
};
