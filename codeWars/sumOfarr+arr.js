function arrayPlusArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
      return arr.reduce(function(a,b){
        return a+b
      })
    }

    arrayPlusArray([1, 2, 3], [4, 5, 6]); //21