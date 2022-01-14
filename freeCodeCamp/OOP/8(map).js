// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(elem => newArray.push(callback(elem)));
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

// Implement map on a Prototype
// // Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
// You should not use the built-in map method.
//  The Array instance can be accessed in the myMap method using this.