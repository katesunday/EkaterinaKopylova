function positiveSum(arr) {
    let newArr = arr.filter(num => num>0);
    console.log(newArr);
     let sum = newArr.reduce(function(a,b){
      return a+b
    })
    return sum;
  }
  positiveSum([1,2,3,4,5])