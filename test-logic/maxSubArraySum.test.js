const maxSubArraySum = require('./maxSubArraySum');

test('Test kasus pertama: [100, 200, 300, 400], 2', () => {
    expect(maxSubArraySum([100, 200, 300, 400], 2)).toBe(700);
});

test('Test kasus kedua: [1, 4, 2, 10, 23, 3, 1, 0, 20], 4', () => {
    expect(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});