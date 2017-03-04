var array = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

// a and b are array items
function compareInnerSum(initialArray, nextArray){
    // x and y are individual numbers in each array
    function arraySum(initialValue, nextNum) {
        return initialValue + nextNum;
    }
    // Get sum of array item and compare to next array item
    // Returns positive, negative or 0. Sorts based on this number
    return initialArray.reduce(arraySum, 0) - nextArray.reduce(arraySum, 0);
}
// Sort by comparison of each sum
array.sort(compareInnerSum);
console.log(array);
