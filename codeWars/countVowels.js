function getCount(str) {
    var vowelsCount = 0;
    var vowels = /[aeiou]/;
    var arr = str.split('');
    for(let i = 0; i<arr.length; i++){
      if(vowels.test(arr[i]) == true){
         vowelsCount++;
         }
    }
    
    return vowelsCount;
  }