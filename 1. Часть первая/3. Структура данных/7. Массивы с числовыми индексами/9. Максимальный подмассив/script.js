function getMaxSubSum(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}





getMaxSubSum([2, 2, -3, 2, 3]);// = 5 (сумма выделенных)
/*getMaxSubSum([2, -1, 2, 3, -9]); // 6
getMaxSubSum([-1, 2, 3, -9, 11]);// = 11
getMaxSubSum([-2, -1, 1, 2]);// = 3
getMaxSubSum([100, -9, 2, -3, 5]);// = 100
getMaxSubSum([1, 2, 3]);// = 6 (неотрицательные - берем всех)*/

