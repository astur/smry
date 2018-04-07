const test = require('ava');
const smry = require('.');

test('base', t => {
    t.deepEqual(smry([1, 2, 3, 4, 5]), {min: 1, max: 5, sum: 15, len: 5, avg: 3});
    t.deepEqual(smry([4, 1, 3, 5, 2]), {min: 1, max: 5, sum: 15, len: 5, avg: 3});
});

test('sorted', t => {
    t.deepEqual(smry([1, 2, 3, 4, 5], {sorted: true}), {min: 1, max: 5, sum: 15, len: 5, avg: 3});
    t.notDeepEqual(smry([4, 1, 3, 5, 2], {sorted: true}), {min: 1, max: 5, sum: 15, len: 5, avg: 3});
});
