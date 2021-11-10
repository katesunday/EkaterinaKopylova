class View {
    GameMenu = { // стартовая страница игры
        render: () =>{
            return `
            <div class="menu" id="menu">
            <button class="playBtn" id="playBtn"><a href="#levels">PLAY</a></button>
            <button class="rulesBtn" id="rulesBtn"><a href="#rules">GAME RULES</a></button>
            <button class="scoreBtn" id="scoreBtn"><a href="#score">SCORE TABLE</a></button>
            <button class="enter" id="enter">ENTER</button>
            <button class="register" id="register">REGISTER</button>
            <button class = "logout" id = "logout">LOG OUT</button>
            <div class = "auth"></div>
             <div class = "dataReg">REGISTER
             <button class = "closeForm">&#10008;</button>
             <label for="name">Name ( min 2  characters):</label>
             <input type="text" id="name" name="name" required
              minlength="2" size="10">
              <label for="email">Email:</label>
             <input type="text" id="email" name="email" required
              minlength="2" size="10">
             <label for="name">Password(2 to 8 characters):</label>
             <input type="text" id="password" name="password" required
              minlength="2" maxlength="8" size="10">
              <button class = "submit" id = "submitReg" >Submit</button>
             </div>
             <div class = "dataEnt">ENTER
             <button class = "closeForm2">&#10008;</button>
             <label for="email">Email :</label>
             <input type="text" id="emailEnt" name="emailEnt" required
              minlength="2"  size="10">
             <label for="name">Password(2 to 8 characters):</label>
             <input type="text" id="passwordEnt" name="password" required
              minlength="2" maxlength="8" size="10">
              <button class = "submit" id = "submitEnt">Submit</button>
             </div>
            </div>
            `
        }
    };
    Play = { // сама игра
        render: (moves) =>{
            return  `
            <div class = "infoLevel"></div>
            <div class = "countMoves">Your moves: ${moves}</div>
            <div class = "canvas">
            <canvas id="sokoban" width="600px" height="500px"></canvas>
            </div>
            <div class = "levelcomplete">
            </div>
            `
        }
        
    };
    Levels = {
        render: () =>{
            return `
            <div class="levels" id = "levels">
            <h3>SELECT LEVEL</h3>
            <div class="level" ><a class="play" id="level1" href="#play">1</a></div>
            <div class="level" ><a class="play" id="level2" href="#play">2</a></div>
            <div class="level" ><a class="play" id="level3" href="#play">3</a></div>
            <div class="level" ><a class="play" id="level4" href="#play">4</a></div>
            <div class="level" ><a class="play" id="level5" href="#play">5</a></div>
            <div class="level" ><a class="play" id="level6" href="#play">6</a></div>
            <div class="level" ><a class="play" id="level7" href="#play">7</a></div>
            <div class="level" ><a class="play" id="level8" href="#play">8</a></div>
            <div class="level" ><a class="play" id="level9" href="#play">9</a></div>
            <div class="level" ><a class="play" id="level10" href="#play">10</a></div>
            <div class="goBack" >
            <img src="img/back.png" alt="go back" id="goBack">
            </div>    
            </div>  
            </div>
            `
        }
    };
    Rules = { //  правила игры
        render: () =>{
            return`
            <div class="rules" id="rules">
            <p class = 'howto'>How to play:</p>
            <p>The player is confined to the board and may move horizontally
                 or vertically onto empty squares (never through walls or boxes).
                  The player can move a box by walking up to it and push it to the 
                  square beyond. Boxes cannot be pulled, and they cannot be pushed 
                  to squares with walls or other boxes.
            </p>
            <p>Use keyboard...</p>
            
            <div class="goBack" >
            <img src="img/back.png" alt="go back" id="goBack">
            </div>    
            </div>   
            `
        }
    }
    Score = {
        render:() =>{
            return `
            <div class="records" id="records">
               <div class="topTen" id="topTen">
                   Top 10 players!
               </div>
               <div class="goBack" >
               <img src="img/back.png" alt="go back" id="goBack">
               </div>  
            </div>
            `
        }
    };
    router = { 
        menu: this.GameMenu,
        play: this.Play,
        rules: this.Rules,
        score: this.Score,
        levels: this.Levels,
        moves: this.moves,
    };
    constructor(field) {
        this.container = field;
        this.container = field;
		this.direction = null;
        this.moves = 0;

		
	   this.wall = new Image();
			 this.wall.src = 'img/wall.png';
	   this.bg = new Image();
			this.bg.src = 'img/bg.png';
	   this.player = new Image();
			this.player.src = 'img/player.png';
	   this.brick = new Image();
			this.brick.src = 'img/brick.png'
	   this.target = new Image();
			this.target.src = 'img/greentarget.png';
	   this.success = new Image();
			this.success.src = 'img/brickSuccess.png';
       
    }
    renderContent(hashPageName,moves) {
        let routeName = "menu";
        if (hashPageName.length > 0) {
            routeName = hashPageName in this.router ? hashPageName : "error";
        }
        this.container.innerHTML = this.router[routeName].render(moves);
        location.hash = routeName;
    }
    showMoves(moves){
       this.moves = moves;
       let divCountMoves = document.querySelector('.countMoves');
       console.log(moves);
       divCountMoves.innerHTML = `Your moves: ${moves} 
        <button class = "music" id = 'music'></button>`;
    //    return this.moves;
    }
    showLevel(targetlevel){
      let divLevel = document.querySelector('.infoLevel');
       let levelNumber = targetlevel.innerText;
       divLevel.innerHTML = `Level: ${levelNumber} `;
    }
    //ф-я отрисовки карты
    drawField (direction,map){
        const cellSize = 70;// размер клетки
        const gameHeight = 700;
        const gameWidth = 900;
        const wall = this.wall;
		const bg = this.bg;
		const player = this.player;
		const brick = this.brick;
		const success = this.success;
		const target = this.target;

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
            
        if(cell== 1){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
            if(direction == 'right'){
                
                ctx.drawImage(player, 130, 128, cellSize, cellSize,x*cellSize,y*cellSize,cellSize,cellSize);
            }
            else if(direction == 'left'){
                ctx.drawImage(player, 130, 65, cellSize, cellSize,x*cellSize,y*cellSize,cellSize,cellSize);
            }
            else if(direction == 'down'){
                ctx.drawImage(player, 70, 0, cellSize, cellSize,x*cellSize,y*cellSize,cellSize,cellSize);
            }
            else if(direction == 'up'){
                ctx.drawImage(player, 130, 190, cellSize, cellSize,x*cellSize,y*cellSize,cellSize,cellSize);
            }
            else{
            //вырезка спрайта - пример
            // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            ctx.drawImage(player, 0, 0, cellSize, cellSize,x*cellSize,y*cellSize,cellSize,cellSize);
            } 
        }
        else if(cell ==2){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
        }
        else if(cell == 3){
            ctx.drawImage(brick,x*cellSize,y*cellSize,cellSize,cellSize);
        }
        else if(cell == 4){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
            ctx.drawImage(target, 0, 0, cellSize, cellSize,(x*cellSize)+cellSize/2-(target.width/2),(y*cellSize)+cellSize/2-(target.width/2),cellSize,cellSize);
        }
        else if(cell == 5){
            ctx.drawImage(bg,x*cellSize,y*cellSize,cellSize,cellSize);
            ctx.drawImage(target, 0, 0, cellSize, cellSize,(x*cellSize)+cellSize/2-(target.width/2),(y*cellSize)+cellSize/2-(target.width/2),cellSize,cellSize);
            ctx.drawImage(success,x*cellSize,y*cellSize,cellSize,cellSize);
        }
        else {
            ctx.drawImage(wall,x*cellSize,y*cellSize,cellSize,cellSize); 
        }
      
        }
     }
    
    showModal(){
        let divLevelComplete = document.querySelector('.levelcomplete');
       divLevelComplete.style.display = 'block';
      divLevelComplete.innerHTML = `<p>You have gained ${100-this.moves} points!</p>
            <button class = "backToLevels">Back to levels</button>`
    }
    changeMusicBtn(){
        document.querySelector('#music').classList.toggle('disabled');
    }

    showRegForm(){
        document.querySelector('.dataReg').style.display = 'flex';
    };
    showEntForm(){
        document.querySelector('.dataEnt').style.display = 'flex';
    }
    closeForm(){
        document.querySelector('.dataEnt').style.display = 'none';
        document.querySelector('.dataReg').style.display = 'none';
    }
    sayHi(username){
       document.querySelector('.auth').innerHTML = `HI, ${username}!!`;
    }

}
