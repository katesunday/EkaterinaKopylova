class Model {
  constructor(_view) {
    this.view = _view;
    this.direction = null;
    this.map = null;
    
    this.level = null;
 window.location.hash = "menu"; //ИСПРАВИТЬ!!!!!
  }

  updateState(hashPageName,level) {     // SPA
    
    if(hashPageName==='play'){
      // level = window[level];
      console.log(level);
      this.view.renderContent(hashPageName);
      this.map = this.deepCopy(level);
    }
    else{
      this.view.renderContent(hashPageName);
    }

  }
  
  goBack() { // возврат в меню
    this.view.renderContent('menu');
  }

 deepCopy = (arr) => {

  var out = [];
  for (var i = 0, len = arr.length; i < len; i++) {
      var item = arr[i];
      var obj = [];
      for (var k in item) {
          obj[k] = item[k];
      }
      out.push(obj);
  }
  console.log(out);
  this.view.drawField(this.direction,out);
  this.findPlayerCoords(out);
  // return out;
  };
 

  movePlayer(playerCoords,direction){
    // countTargets();
    const newPlayerY = this.getY(playerCoords.y, direction, 1)
    const newPlayerX = this.getX(playerCoords.x, direction, 1)
    
    // ЛОГИКА ИГРОКА
    //оставлять за собой фон и цели исходя из 
    this.map[playerCoords.y][playerCoords.x] =
   this.isTarget(level[playerCoords.y][playerCoords.x]) ? 4 : 2;
    
    //если есть стена, то шаг = 0
    if (this.isWall(this.map[newPlayerY][newPlayerX])) {
      this.map[this.getY(playerCoords.y, direction, 0)][this.getX(playerCoords.x, direction, 0)] = 1;
      this.view.drawField(direction,this.map);
      console.log('рядом стена')
    }
       // если за игроком куб, то
       else if(this.isBrick(this.map[newPlayerY][newPlayerX])){
	        console.log('рядом куб');
          //если через 2 шага там НЕ стена, то сдвигаем игрока на 1 шаг а кубик на 2 от игрока соотвественно 
	           if (this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] != 0) {
                // если через два шага НЕ цель, то двигает игрока и кубик
                if(this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] != 4){
                  this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
                  this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 3;
                } 
                // если там ЦЕЛЬ, то кубик делаем зеленым( т.е успешным)
                else{
                  this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 5;
                  this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
                }
	            } 
             //а если там стена, то игрока не двигать больше
             else {
              this.map[this.getY(playerCoords.y, direction, 0)][this.getX(playerCoords.x, direction, 0)] = 1;
              this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 3;
	           }
             this.view.drawField(direction,this.map);
       }
       //если за игроком ЗЕЛЕНЫЙ КУБ, то при движении куб сделать обычным
      else if(this.isSuccess(this.map[newPlayerY][newPlayerX])){
          //если через 2 шага там НЕ стена, то сдвигаем игрока на 1 шаг а кубик на 2 от игрока соотвественно 
          if (this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] != 0) {
            this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
            this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 3;
          }
          else{
            this.map[this.getY(playerCoords.y, direction, 0)][this.getX(playerCoords.x, direction, 0)] = 1;
          }
    
          this.view.drawField(direction,this.map);
      }
    else{
      this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
      this.view.drawField(direction,this.map);
    }
     
    
  };

  countTargets = ()=>{
    let countT = [];
    this.map.forEach((row, y) => { // взять каждую строку по У вниз
      row.forEach((cell, x) => { // каждую клетку 
        if(cell == 4){
          countT.push(cell);
        }
      })
    })
    // console.log(countT);
    if(countT.length < 1){
        console.log('все цели достигнуты')
    }
  };


 findPlayerCoords = (map)=> { //найти координаты игрока
  console.log(map);
   const y = map.findIndex(row => row.includes(1));// если в строке есть игрок дать его индекс
   const x = map[y].indexOf(1); //дать его индекс в строке 
    return {
      x,
      y,
      above: map[y - 1][x],
      below: map[y + 1][x],
      sideLeft: map[y][x - 1],
      sideRight: map[y][x + 1],
       }
  };
  // функции поиска соседних блоков
 isBrick = (cell) => [3].includes(cell);// есть ли кубик в клетке
 isPlayer = (cell) => [1].includes(cell);
 isTraversible = (cell) => [2].includes(cell);
 isWall = (cell) => [0].includes(cell);
 isTarget = (cell) => [4].includes(cell);
 isSuccess = (cell) => [5].includes(cell);

 getX = (x, direction, spaces = 1) => {
  if (direction === 'up' || direction === 'down') {
    return x
  }
  if (direction === 'right') {

    return x + spaces
  }
  if (direction === 'left') {
    return x - spaces
  }
  };

 getY = (y, direction, spaces = 1) => {
  if (direction === 'left' || direction === 'right') {
    return y
  }
  if (direction === 'down') {
    return y + spaces
  }
  if (direction === 'up') {
    return y - spaces
  }
  };

}