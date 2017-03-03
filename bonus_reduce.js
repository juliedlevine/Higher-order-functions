// Bonus reduce
function reduce(arr, combine, initialValue) {
    // First time sum is 0
    var sum = initialValue;
    // Loop over each value in myArray [1, 2, 3]
    arr.forEach(function(x){
        // Loop 3 times starting at 0 and adding onto itself
        // Addition pairs (0, 1), (1, 2), (3, 3)
        sum = combine(sum, x);
    });
    return sum;
}

// Given array
var myArray = [1, 2, 3];
// Given combine function
function combine(value, n){
    return value + n;
}

// Execute
console.log(reduce(myArray, combine, 0));
