function find_average(array) {
    let result = 0;
  if(!array || array.length ==0){
    return result;
  }
    else{
      var total = array.reduce(function(curr,prev){
        return curr+prev;
      })
      return total/array.length;
    }
  }