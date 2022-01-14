const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let newArr  = arr.slice();
newArr.sort(function(a,b){
  return a-b
})
console.log(newArr)
return newArr;
  // Only change code above this line
}

nonMutatingSort(globalArray);


//по убыванию