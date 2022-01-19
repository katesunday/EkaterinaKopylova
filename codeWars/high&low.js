function highAndLow(numbers){
    let arr = numbers.split(' ').map(function(el){ return +el;});
    let max = Math.max.apply(0, arr);
    let min = Math.min.apply(0, arr);
    return max.toString()+" "+min.toString();
    
      
    }

    highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9" 