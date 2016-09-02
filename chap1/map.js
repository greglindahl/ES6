// Map Helper

var numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;


// use a map Helper

var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubledNumbers;

// Grabs a property from an object
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camero', price: 'expensive' }
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;  // ["CHEAP","expensive"]


// Plucking Values
//
// Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
});

heights;

// Calculating Values with Map
//
// Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
});

speeds;

// Really Hard - Implementing 'Pluck'
//
// This is a hard one!
// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.

// Example:
//
// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

// Hint:

// Remember that you can access a property on an object by using square bracket notation. For example...
//
// var person = { name: 'Bill' };
// person['name'] // returns 'Bill'

var names = [
  { name: 'Bill' },
  { name: 'Jim' },
  { name: 'Bob' }
];

function pluck(array, property) {
    array.map(function(property) {
      return array['property'];
    });
}

pluck(names, name);
