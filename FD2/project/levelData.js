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
var success = new Image();
success.src = 'img/brickSuccess.png';

function deepCopy (arr) {
    var out = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        var obj = [];
        for (var k in item) {
            obj[k] = item[k];
        }
        out.push(obj);
    }
    return out;
}

// карта первого уровня
const level1 = [
    [wall,wall,wall,wall,wall,wall],
    [wall,player,bg,bg,bg,wall],
    [wall,bg,bg,brick,target,wall],
    [wall,bg,target,brick,bg,wall],
    [wall,wall,wall,wall,wall,wall],
];
const map =  deepCopy(level1);

 const countTargets = ()=>{
    let countT = [];
    map.forEach((row, y) => { // взять каждую строку по У вниз
      row.forEach((cell, x) => { // каждую клетку 
        if(cell == target){
          countT.push(cell);
        }
      })
    })
    // console.log(countT);
    if(countT.length < 1){
        console.log('все цели достигнуты')
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
const isSuccess = (cell) => [success].includes(cell);

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
