// filter array Helper - filter a list

var products = [
  { name: 'cucumber', type: 'vegatable' },
  { name: 'banana', type: 'fruit' },
  { name: 'orange', type: 'fruit' },
  { name: 'carrot', type: 'vegatable' }
];

var filteredProducts = [];

// traditional for loop
for ( var i = 0; i < products.length; i++ ) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

// refactor with filter helper
products.filter(function(product) {
  return product.type === 'fruit';
});

//more complex example

var products = [
  { name: 'cucumber', type: 'vegatable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'orange', type: 'fruit', quantity: 30, price: 13 },
  { name: 'carrot', type: 'vegatable', quantity: 3, price: 5 }
];

//Type is vegatable, quantity is greater than 0 prices is less than 10

products.filter(function(product) {
    return product.type === 'vegatable'
      && product.quantity > 0
      && product.price < 10
});

// Practical example
var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

// Coding Exercises
//Filtering Values

// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

filteredNumbers = numbers.filter(function(number) {
  return number > 50;
});

filteredNumbers;


// Handling Permissions with Filter
//
// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function(user) {
  return user.admin === true;
});


//Challenging! Implementing 'reject'.
// This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

// For example:
//
// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number){
//   return number > 15;
// });
// lessThanFifteen // [ 10 ];

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var nonAdmin;

nonAdmin = users.filter(function(users, users.map) {
  return user.admin === false;
});

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var nonAdmin;

nonAdmin = reject(users, (function(users, users.map)) {
  return user.admin === false;
});
