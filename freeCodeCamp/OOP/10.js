// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(function(elem){
    if(callback(elem)==true){
      newArray.push(elem)
    }
  })
  // Only change code above this line
  console.log(newArray)
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


// Implement the filter Method on a Prototype
// // Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.fi
// You should not use the built-in filter method. 
// The Array instance can be accessed in the myFilter method using this.