class Model {
  constructor(_view) {
      this.view = _view;
      window.location.hash = "menu";
    }

  updateState(hashPageName) {     // SPA
    this.view.renderContent(hashPageName);
    if(hashPageName==='play'){
      this.view.drawField();
    }
    }
  
  goBack() { // возврат в меню
    this.view.renderContent('menu');
  }
  movePlayer(playerCoords,direction){
    // console.log(playerCoords);
    countTargets();
    const newPlayerY = getY(playerCoords.y, direction, 1)
    const newPlayerX = getX(playerCoords.x, direction, 1)
    
    // ЛОГИКА ИГРОКА
    //оставлять за собой фон и цели исходя из 
    map[playerCoords.y][playerCoords.x] =
    isTarget(level1[playerCoords.y][playerCoords.x]) ? target : bg;
    
    //если есть стена, то шаг = 0
    if (isWall(map[newPlayerY][newPlayerX])) {
      map[getY(playerCoords.y, direction, 0)][getX(playerCoords.x, direction, 0)] = player;
      this.view.drawField();
      console.log('рядом стена')
    }
       // если за игроком куб, то
       else if(isBrick(map[newPlayerY][newPlayerX])){
	        console.log('рядом куб');
          //если через 2 шага там НЕ стена, то сдвигаем игрока на 1 шаг а кубик на 2 от игрока соотвественно 
	           if (map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] != wall) {
                // если через два шага НЕ цель, то двигает игрока и кубик
                if(map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] != target){
                map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player;
                map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] = brick;
                } 
                // если там ЦЕЛЬ, то кубик делаем зеленым( т.е успешным)
                else{
                map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] = success;
                map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player;
                }
	            } 
             //а если там стена, то игрока не двигать больше
             else {
             map[getY(playerCoords.y, direction, 0)][getX(playerCoords.x, direction, 0)] = player;
		         map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = brick;
	           }
             this.view.drawField();
       }
       //если за игроком ЗЕЛЕНЫЙ КУБ, то при движении куб сделать обычным
      else if(isSuccess(map[newPlayerY][newPlayerX])){
          //если через 2 шага там НЕ стена, то сдвигаем игрока на 1 шаг а кубик на 2 от игрока соотвественно 
          if (map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] != wall) {
            map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player;
            map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] = brick;
          }
          else{
            map[getY(playerCoords.y, direction, 0)][getX(playerCoords.x, direction, 0)] = player;
          }
    
          this.view.drawField();
      }
    else{
      map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player;
      this.view.drawField();
    }
     
    
  }

}