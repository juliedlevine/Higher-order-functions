// Bonus: map

// arr is array of names, fun is sayHello
function map(arr, fun){
    var newArray = [];
    // Loop 3 times, x is ['Julie', 'Toby', 'Blake']
    // Acts like i would in a regular for loop
    arr.forEach(function(x){
        // [sayHello('Julie')]
        // [sayHello('Toby')]
        // [sayHello('Blake')] - adds each of these to newArray
        newArray.push(fun(x));
    });
    return newArray;
}


// Given array
var myArray = ['Julie', 'Toby', 'Blake'];
// Given function
function sayHello(name){
    return 'Hello, ' + name + '!';
}
// Execute
console.log(map(myArray, sayHello));
