// Range function
function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

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

function box(width, height){
    // [0, 1, 2]
    var boxWidth = range(0, width);
    // [0, 1, 2, 3]
    var boxHeight = range(0, height);
    // ['*', '*', '*']
    var starArray = boxWidth.map(function(){
        return '*';
    });
    // '***'
    var starString = strJoin(starArray, '');
    // [ '***', '***', '***', '***' ]
    var boxArray = boxHeight.map(function(){
        return starString;
    });
    // String of star sets
    var boxString = strJoin(boxArray, '\n');
    return boxString;
}
console.log(box(3, 4));
