const sortDescending = require('./sortDescending');

test('Mengurutkan array normal', () => {
    expect(sortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test('Mengurutkan array dengan semua elemen sama', () => {
    expect(sortDescending([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
});