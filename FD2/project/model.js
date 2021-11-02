class Model {
  constructor(_view) {
      this.view = _view;
      window.location.hash = "menu";
    }

  updateState(hashPageName) {     // SPA
    this.view.renderContent(hashPageName);
    if(hashPageName==='play'){
      drawField();
    }
    }
  
  goBack() { // возврат в меню
    this.view.renderContent('menu');
  }
  movePlayer(playerCoords,direction){
    // console.log(playerCoords);
    const newBoxY = getY(playerCoords.y, direction, 1)
    const newBoxX = getX(playerCoords.x, direction, 1)
    console.log(newBoxX);
    console.log(newBoxY);
    // Replace previous spot with initial board state (void or empty)
    map[playerCoords.y][playerCoords.x] =
    isTarget(map[playerCoords.y][playerCoords.x]) ? target : bg;

    // Move player
  
    if (isWall(map[newBoxY][newBoxX])) {
      map[getY(playerCoords.y, direction, 0)][getX(playerCoords.x, direction, 0)] = player;
      map[getY(playerCoords.y, direction, 0)][getX(playerCoords.x, direction, 0)] = brick;
      // drawField();
      // return
    }
    else if(isBrick(map[newBoxY][newBoxX])){
      console.log('рядом куб');
      map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player;
      map[getY(playerCoords.y, direction, 2)][getX(playerCoords.x, direction, 2)] = brick;
      drawField();

    }
    else{
      map[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player;
      drawField();
    }
    
  }

}