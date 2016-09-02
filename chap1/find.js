// Find array Helper

var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

// traditional for loop
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

user;

// Find Helper
users.find(function(user) {
  return user.name === 'Alex';
});
// find will return the first object that meets our condition - so if we had
// two 'Alex' then this wouldn't work - we would use .filter instead

function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camero'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus'
});

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// See a list of blog posts - find a particular blog post
// User clicks on a blog post from list and we display forum.com/posts/45
// 45 is the id - we find it and show it

const posts = [
  { id: 41, title: 'Post title' },
  { id: 42, title: 'Post title' },
  { id: 43, title: 'Post title' },
  { id: 44, title: 'Post title' },
  { id: 45, title: 'Post title' },
];

const postId = getIdFromURL();

posts.find(post => post.id === postId);

// Finding Admin Users

// Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(function(user) {
  return user.admin === true
});

admin;

// What's Your Balance?

// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function(account) {
  return account.balance === 12;
});
