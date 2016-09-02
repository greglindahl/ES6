// Array Helper Methods
// forEach, map, filter, find, every, some, reduce

// forEach
// classic for loop
var colors = [ 'red', 'blue', 'green' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach example
colors.forEach(function(color) {
  console.log(color);
});

// create an array of numbers
var numbers = [1,2,3,4,5];

// create a var to hold the sum
var sum = 0;

// function to increment my sum - this is the iterator function
function adder(number) {
  sum += number;
}

// loop over the array, incrementing the sum var
// only have to reference the `adder` function
numbers.forEach(adder);

// print the sum var
sum;

// Code Challenge
// The code below is calling 'savePost' three times, but it is doing so using a for loop.  This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  Rather than using a for loop, refactor the code below to instead use the forEach helper.

// Original Code
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

var savePost = [];

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post) {
      return savePost.push(post[i]);
    });
}

savePost;

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
  areas.push(image.height * image.width);
});

areas;
