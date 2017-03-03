// Range function
function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

// Str Join
function strJoin(arr, separator){
    var joinStrings = arr.reduce(function(currentString, word){
        if (currentString === '') {
            return word;
        } else {
            return currentString + separator + word;
        }
    }, '');
    return joinStrings;
}

// Str Multiply
function strMultiply(string, times) {
    // Array of numbers 0 to 4 (5 items)
    var numArray = range(0, times);
    // Replace numbers with string given
    var strArray = numArray.map(function(){
        return string;
    });
    var answer = strJoin(strArray, '');
    console.log(answer);
}
strMultiply('abc', 5);
