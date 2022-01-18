function getAverage(marks){
    let result = 0;
  if(!marks || marks.length ==0){
    return result;
  }
    else{
      var total = marks.reduce(function(curr,prev){
        return curr+prev;
      })
      return Math.floor(total/marks.length);
    }
  }
  