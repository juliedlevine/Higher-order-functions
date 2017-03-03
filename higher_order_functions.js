// Positive numbers
var numbers = [1, 2, -4, 6, -1, 9, 10, -11];
var positives = numbers.filter(function(number){
    return number > 0;
});
// Execute
// console.log(positives);


// Even numbers
var numbers = [1, 2, 5, 7, 9, 10, 12, 33, 21, 5, 20];
var evens = numbers.filter(function(number){
    return number % 2 === 0;
});
// Execute
// console.log(evens);


//Square the numbers
var numbers = [1, 2, 3];
var squares = numbers.map(function(number){
    return number * number;
});
// Execute
// console.log(squares);


// Cities 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var coolCities = cities.filter(function(city){
    return city.temperature < 70;
});
// Execute
// console.log(coolCities);


// Cities 2
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var cityNames = cities.map(function(city){
    return city.name;
});
// Execute
// console.log(cityNames);


// Good Job!
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
people.forEach(function(name) {
//     console.log('Good Job, ' + name + '!');
});


// Sort an Array
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
var alphabetical = people.sort();
// Execute
// console.log(alphabetical);


// Sort by how long each name is
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
function nameLength(a, b) {
    return a.length - b.length;
}
var sortedLength = people.sort(nameLength);
// Execute
// console.log(sortedLength);


// Sort an array 3- sort by price
var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
function priceSort(array){
    var compare = function(object1, object2){
        return object2.price - object1.price;
    };
    var priceSort = array.sort(compare);
    console.log(priceSort);
}
// Execute
// priceSort(products);


// Three times
function call3Times(fun) {
  fun();
  fun();
  fun();
}
var printHello = function(){
    console.log('Hello, world!');
};
// Execute
// call3Times(printHello);


// n times
function callNTimes(times, callback){
    for (var i = 0; i < times; i ++) {
        callback();
    }
}
var printHello = function(){
    console.log('Hello, world!');
};
// Execute
// callNTimes(5, printHello);


// Sum an Array
function sum(array){
    var combine = function(a, b) {
        return a + b;
    };
    console.log(array.reduce(combine, 0));
}
// Execute
// sum([1, 2, 3]);


// Acronym
function acronym(array){
    var acroList = array.reduce(function(currentValue, name){
        return currentValue + name[0].toUpperCase();
    }, '');
    console.log(acroList);
}
// Execute
// acronym(['national', 'aeronautics', 'space', 'administration']);


// Total Price
function total(array) {
    var sum = array.reduce(function(a, b) {
        return a + b.price;
    }, 0);
    console.log(sum);
}
var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
// Execute
// total(products);


// Product
function product(numArray){
    var sum = numArray.reduce(function(a, b) {
        return a * b;
    }, 1);
    console.log(sum);
}
// Execute
// product([3, 4, 5]);
