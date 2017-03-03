// Bonus filter
function filter(arr, fun){
    var newArray = [];
    // Loop through each item in the array, x is [1, 2, 3]
    arr.forEach(function(x){
        // if the odd detection function returns true...
        if (fun(x) === true) {
            // add that number to a new array
            newArray.push(x);
        }
    });
    return newArray;
}


// Given array
var myArray = [1, 2, 3];
// Given function (returns true or false)
var filterFun = function(n){
    return n % 2 === 1;
};

// Execute
console.log(filter(myArray, filterFun));
