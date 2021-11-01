class View {
    GameMenu = { // стартовая страница игры
        render: () =>{
            return `
            <div class="menu" id="menu">
            <button class="playBtn" id="playBtn"><a href="#levels">PLAY</a></button>
            <button class="rulesBtn" id="rulesBtn"><a href="#rules">GAME RULES</a></button>
            <button class="scoreBtn" id="scoreBtn"><a href="#score">SCORE TABLE</a></button>
            </div>
            `
        }
    };
    Play = { // сама игра
        render: () =>{
            return  `
            <div class = "canvas">
            <canvas id="sokoban" width="900px" height="700px"></canvas>
            </div>
            `
        }
        
    };
    Levels = {
        render: () =>{
            return `
            <div class="levels" id = "levels">
            <h3>SELECT LEVEL</h3>
            <div class="level" id="level1"><a href="#play">1</a></div>
            <div class="level" id="level2">2</div>
            <div class="level" id="level3">3</div>
            <div class="level" id="level4">4</div>
            <div class="level" id="level5">5</div>
            <div class="level" id="level6">6</div>
            <div class="level" id="level7">7</div>
            <div class="level" id="level8">8</div>
            <div class="level" id="level9">9</div>
            <div class="level" id="level10">10</div>
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
    };
    constructor(field) {
        this.container = field;
    }
    renderContent(hashPageName) {
        let routeName = "menu";

        if (hashPageName.length > 0) {
            routeName = hashPageName in this.router ? hashPageName : "error";
        }
        this.container.innerHTML = this.router[routeName].render();
        location.hash = routeName;

    }

  
}