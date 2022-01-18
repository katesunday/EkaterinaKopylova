function countPositivesSumNegatives(input) {
    let count = 0;
    let countNeg = 0;
    let result = [];
      input.map(function(num){
        if(num>0){
          count++;
        }
        else{
          countNeg+= num;
        }
      });
  result.push(count,countNeg);
     return result
  }

  let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];