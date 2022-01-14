const squareList = arr => {
    // Only change code below this line
  let positiveArr = arr.filter(num => num > 0 && Number.isInteger(num));
  console.log(positiveArr);
  let finalArr = [];
  positiveArr.filter(function(num){
  finalArr.push(Math.pow(num,2))
  });
  return finalArr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

  //квадраты всех целых положительных чисел