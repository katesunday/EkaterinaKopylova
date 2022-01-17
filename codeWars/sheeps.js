function countSheeps(arrayOfSheep) {
    let sheep = 0;
      for(let i = 0;i< arrayOfSheep.length;i++){
        if(arrayOfSheep[i]){
          sheep++;
        }
      }
          return sheep;
}

    var array1 = [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ];

countSheeps(array1);