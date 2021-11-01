var cellSize = 70;// размер клетки
var gameHeight = 700;
var gameWidth = 900;

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


const map = [
    [wall,wall,wall,wall,wall,wall],
    [wall,player,bg,bg,bg,wall],
    [wall,bg,wall,wall,wall,wall],
    [wall,brick,wall],
    [wall,target,wall],
    [wall,wall,wall],
]


const drawField = function(){
    const game = document.getElementById('sokoban');
    if(game && game.getContext('2d')){
        var ctx = game.getContext('2d');
    }
    map.forEach((row, y) => {
        row.forEach((cell, x) => {
          paintCell(ctx, cell, x, y)
        })
      })
    function paintCell(ctx, cell, x, y) {
        if(cell== player){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
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
