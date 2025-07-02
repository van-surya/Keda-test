const sumEvenNumbers = require('./sumEvenNumbers');

test('Test input 1', () => {
    expect(sumEvenNumbers({
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup"
            }
        }
    })).toBe(6);
});

test('Test input 2', () => {
    expect(sumEvenNumbers({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: 'car' }
    })).toBe(12);
});