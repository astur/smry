const test = require('ava');
const smry = require('.');

test('base', t => {
    t.deepEqual(
        smry([1, 2, 3, 4, 5]),
        {min: 1, max: 5, sum: 15, len: 5, avg: 3}
    );
    t.deepEqual(
        smry([4, 1, 3, 5, 2]),
        {min: 1, max: 5, sum: 15, len: 5, avg: 3}
    );
});

test('sorted', t => {
    t.deepEqual(
        smry([1, 2, 3, 4, 5], {sorted: true}),
        {min: 1, max: 5, sum: 15, len: 5, avg: 3}
    );
    t.notDeepEqual(
        smry([4, 1, 3, 5, 2], {sorted: true}),
        {min: 1, max: 5, sum: 15, len: 5, avg: 3}
    );
});

test('fractionDigits', t => {
    t.deepEqual(
        smry([1, 0.001]),
        {min: 0.001, max: 1, sum: 1.001, len: 2, avg: 0.5005}
    );
    t.deepEqual(
        smry([1, 0.001], {fractionDigits: 0}),
        {min: 0, max: 1, sum: 1, len: 2, avg: 1}
    );
    t.deepEqual(
        smry([1, 0.001], {fractionDigits: 1}),
        {min: 0, max: 1, sum: 1, len: 2, avg: 0.5}
    );
});

test('quantile', t => {
    t.is(
        smry([1, 2, 3, 4], {quantile: []}).quantile,
        undefined
    );
    t.deepEqual(
        smry([1, 2, 3, 4], {quantile: 0.5}).quantile,
        {0.5: 2.5}
    );
    t.deepEqual(
        smry([1, 2, 3, 4], {quantile: [0.5]}).quantile,
        {0.5: 2.5}
    );
    t.deepEqual(
        smry([1, 2, 3, 4], {quantile: [0.25, 0.5, 0.75]}).quantile,
        {0.25: 1.25, 0.5: 2.5, 0.75: 3.75}
    );
});
