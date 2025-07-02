function sumEvenNumbers(obj) {
    let total = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'number' && value % 2 === 0) {
                total += value;
            } else if (typeof value === 'object') {
                total += sumEvenNumbers(value);
            }
        }
    }
    return total;
}

module.exports = sumEvenNumbers;