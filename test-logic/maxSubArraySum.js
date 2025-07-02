function maxSubArraySum(arr, num) {
    if (arr.length < num || num <= 0) {
        return null;
    }

    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < num; i++) {
        windowSum = windowSum + arr[i];
    }

    maxSum = windowSum;

    for (let i = num; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - num]; //update window
        maxSum = Math.max(maxSum, windowSum); //check apakah lebih besar
    }
    return maxSum;
}

module.exports = maxSubArraySum;