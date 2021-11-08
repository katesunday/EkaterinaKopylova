class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    this.level = null;
    window.addEventListener("hashchange", this.updateState);
    // window.onload = ()=>{
    //   audioIntro.play();
    // }
    this.updateState(); 
    this.listeners();
    // this.listenKeyboard();
    
  }
  updateState = ()=>{
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    if(hashPageName != 'play'){ //перерисовка плэй отдельно!
      this.model.updateState(hashPageName,this.level);
     
    }
    // else{
    //   window.onbeforeunload = function() {
    
    //     alert( "Есть несохранённые изменения. Всё равно уходим?");
    //     return false;
    //   };
    // }
  }

  listeners = ()=>{

    document.addEventListener('click',(e)=>{
      let target = e.target;
      let goBackbtn = document.getElementById('goBack');
      let btnBackToLevels =  document.querySelector('.backToLevels');
      let submitBtn = document.querySelector('.submit');
      let userName  = document.querySelector('#name');
      let userPW = document.querySelector('#password');
      let enterBtn = document.querySelector('.enter');
      let registerBtn = document.querySelector('.register');
      let closeFormBtn = document.querySelector('.closeForm');
      let closeFormBtn2 = document.querySelector('.closeForm2');
      if(target.hash == '#play'){ //отрисовка игры в зависимости от уровня
        let level = target.id;
        level = window[level];
        this.model.updateState('play',level,target);
        this.listenKeyboard(level);// включить слушатели клавиатуры
      };
      switch(target){
        case goBackbtn:
          this.model.goBack();
        break;
        case btnBackToLevels:
          this.model.updateState('levels',this.level);
        break;
        case submitBtn:
          this.model.addUser(userName.value,userPW.value);
        break;
        case registerBtn:
          this.model.showRegForm();
        break;
        case enterBtn:
          this.model.showEntForm();
        break;
        case closeFormBtn:
          this.model.closeForm();
        break;
        case closeFormBtn2:
          this.model.closeForm();
        break;
      }
 
    });
  }
  listenKeyboard(level){
  if(this.container.querySelector('canvas')){
     document.addEventListener('keydown', (e) =>{
      let direction = null;
      switch (e.key){
        case "ArrowRight":
          this.model.countMoves();
          direction = 'right';
          this.model.movePlayer(direction,level);// передача направления и уровня
        break;
        case "ArrowLeft":
          this.model.countMoves();
          direction = 'left';
          this.model.movePlayer(direction,level);
        break;
        case "ArrowUp":
          this.model.countMoves();
          direction = 'up';
          this.model.movePlayer(direction,level);
        break;
        case "ArrowDown":
          this.model.countMoves();
          direction = 'down';
          this.model.movePlayer(direction,level);
        break;
        
      }
     })
  }
  }
}