// Array Range function
function range(min, max) {
    var arr = [];
    // Loop 4 times
    for (var i = min; i < max; i++) {
        // [0], [0, 1], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4] - build array up on each loop.
        arr.push(i);
    }
    return arr;
}
// returns an array of numbers
// example: range(0, 3)
// returns: [0, 1, 2, 3, 4]



// Join a String from an Array
function strJoin(arr, separator){
    var joinStrings = arr.reduce(function(currentString, char){
        // Initial value comes from end of function
        if (currentString === '') {
            // '0'
            return char;
        } else {
            // '01', '012', '0123', '01234' - continue building on each loop, separating by given separator.
            return currentString + separator + char;
        }
    }, '');
    return joinStrings;
}
// returns a single string joined by the separator
// example: strJoin([0, 1, 2, 3, 4], '')
// returns: '01234'



// Multiply String
function strMultiply(string, times) {
    // [0, 1, 2]
    var numArray = range(0, times);
    // ['*', '*', '*']
    var strArray = numArray.map(function(){
        // '*' - replace every number with star
        return string;
    });
    // '***'
    return strJoin(strArray, '');
}
// returns a string inline multiplied however many times
// exaple: strMultiply('*', 3)
// returns: '***'



// Box function
function box(width, height){
    // [0, 1, 2, 3]
    var boxHeight = range(0, height);
    // '***'
    var starString = strMultiply('*', width);
    // [ '***', '***', '***', '***' ]
    var boxArray = boxHeight.map(function(){
        return starString;
    });
    // String of stars separated by new line
    var boxString = strJoin(boxArray, '\n');
    return boxString;
}
console.log(box(3, 4));
