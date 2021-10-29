class View {
    GameMenu = { // стартовая страница игры
        render: () =>{
            return `
            <div class="menu" id="menu">
            <button class="playBtn" id="playBtn"><a href="#play">PLAY</a></button>
            <button class="rulesBtn" id="rulesBtn"><a href="#rules">GAME RULES</a></button>
            <button class="scoreBtn" id="scoreBtn"><a href="#score">SCORE TABLE</a></button>
            </div>
            `
        }
    };
    Play = { // сама игра
        render: () =>{
            return `
            <canvas id="sokoban" width="690px" height="852px"></canvas>
            `
        }
    };
    Rules = { //  правила игры
        render: () =>{
            return`
            <p>How to play:</p>
            <p>The player is confined to the board and may move horizontally
                 or vertically onto empty squares (never through walls or boxes).
                  The player can move a box by walking up to it and push it to the 
                  square beyond. Boxes cannot be pulled, and they cannot be pushed 
                  to squares with walls or other boxes.
            </p>
            <p>Use keyboard...</p>
            <div class="goBack" id="goBack">
            <img src="img/back.png" alt="go back">
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
            </div>
            <div class="goBack" id="goBack">
            <img src="img/back.png" alt="go back">
            </div>  
            `
        }
    };
    router = { 
        menu: this.GameMenu,
        game: this.Play,
        rules: this.Rules,
        score: this.Score
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
    }

  
}
