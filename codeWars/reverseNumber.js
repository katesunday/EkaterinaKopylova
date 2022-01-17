function digitize(n) {
    n =  n.toString();
   let reverse = n.split("").reverse();
     let finalArr = [];
   reverse.forEach(elem =>finalArr.push(Number(elem)))
     return finalArr;
   }