function squareDigits(num){
    let arr = num.toString(10).split('').map(int => parseInt(int));
    console.log(arr);
    let doubles = arr.map(function(num) {
    return Math.pow(num,2);
     });
    console.log(doubles);
    let result = doubles.join('');
    return Number(result);
  }

  squareDigits(3212); // 9414