function sortDescending(arr) {
    // salin array
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array[i] = arr[i];
    }
    // Bubble sort descending
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                // switch posisi
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
module.exports = sortDescending;