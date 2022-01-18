function fakeBin(x){
    return x.split('').map(function(item){
      return item<5 ? item=0: item = 1;
    }).join('');
    }

    fakeBin('45385593107843568');