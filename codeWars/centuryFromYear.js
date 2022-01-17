function century(year) {
    return year%100 ===0 ? year/100: Math.floor((year/100)+1);
    
    }