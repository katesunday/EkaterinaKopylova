var cellSize = 70;// размер клетки
var gameHeight = 700;
var gameWidth = 900;

// картинки для канваса
var wall = new Image();
wall.src = 'img/wall.png';
var bg = new Image();
bg.src = 'img/bg.png';
var player = new Image();
player.src = 'img/player.png';
var brick = new Image();
brick.src = 'img/brick.png'
var target = new Image();
target.src = 'img/greentarget.png';

// карта первого уровня
const map = [
    [wall,wall,wall,wall,wall,wall],
    [wall,player,bg,bg,bg,wall],
    [wall,bg,wall,wall,wall,wall],
    [wall,brick,wall],
    [wall,target,wall],
    [wall,wall,wall],
]

//ф-я отрисовки карты
const drawField = function(){
    const game = document.getElementById('sokoban');
    if(game && game.getContext('2d')){
        var ctx = game.getContext('2d');
    }
    map.forEach((row, y) => { // взять каждую строку по У вниз
        row.forEach((cell, x) => { // каждую клетку 
          paintCell(ctx, cell, x, y)
        })
      })
    function paintCell(ctx, cell, x, y) {
        if(cell== player){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
            //вырезка спрайта - пример
            // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            ctx.drawImage(player, 0, 0, cellSize, cellSize,x*cellSize,y*cellSize,cellSize,cellSize);
        }
        else if(cell == target){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
            ctx.drawImage(target, 0, 0, cellSize, cellSize,(x*cellSize)+cellSize/2-(target.width/2),(y*cellSize)+cellSize/2-(target.width/2),cellSize,cellSize);
        }
        else{
            ctx.drawImage(cell,x*cellSize,y*cellSize,cellSize,cellSize);
        }
      }
}
function findPlayerCoords() { //найти координаты игрока
    const y = map.findIndex(row => row.includes(player));// если в строке есть игрок дать его индекс
    const x = map[y].indexOf(player); //дать его индекс в строке 
    return {
      x,
      y,
      above: map[y - 1][x],
      below: map[y + 1][x],
      sideLeft: map[y][x - 1],
      sideRight: map[y][x + 1],
    }
}
// функции поиска соседних блоков
const isBrick = (cell) => [brick].includes(cell);// есть ли кубик в клетке
const isPlayer = (cell) => [player].includes(cell);
const isTraversible = (cell) => [bg].includes(cell);
const isWall = (cell) => [wall].includes(cell);
const isTarget = (cell) => [target].includes(cell);

const getX = (x, direction, spaces = 1) => {
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

const getY = (y, direction, spaces = 1) => {
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
