// Bonus: forEach

// arr is name objects; fun is printHello
function forEach(arr, fun){
    // loop 3 times
    for (var i = 0; i < arr.length; i ++) {
        // printHello({name: 'Bob'}) - does this for each item in arr
        fun(arr[i]);
    }
}
var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];
var printHello = function(person) {
    console.log('Hello, ' + person.name + '!');
};

// Execute
forEach(arr, printHello);
