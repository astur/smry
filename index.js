module.exports = (arr, {sorted = false} = {}) => {
    if(!sorted) arr = arr.slice().sort((x, y) => x - y);
    const len = arr.length;
    const sum = arr.reduce((a, b) => a + b, 0);
    return {
        min: arr[0],
        max: arr[len - 1],
        sum,
        len,
        avg: sum / len,
    };
};
