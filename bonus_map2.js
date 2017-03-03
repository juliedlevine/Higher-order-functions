// Bonus: map 2

// arr is [1, 2, 3], function is multiply
function map(arr, fun){
    var newArray = [];
    // Loop 3 times; num is [1, 2, 3]
    arr.forEach(function(num){
        // add value of multiply(1), multiply(2), multiply(3) to new array
        return newArray.push(fun(num));
    });
    return newArray;
}

// Given array
var myArray = [1, 2, 3];
// Given function
var multiply = function(n) {
    return n * n;
};

// Execute
console.log(map(myArray, multiply));
