class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    this.level = null;
    window.addEventListener("hashchange", this.updateState);
    this.updateState(); 
    this.listeners();
    
  }
  updateState = ()=>{
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    if(hashPageName != 'play'){ //перерисовка плэй отдельно!
      this.model.updateState(hashPageName,this.level); 
      if(!this.container.querySelector('canvas')){
        document.removeEventListener('keydown',this.keyHandler); 
      }
         
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
      let submitBtnReg = document.querySelector('#submitReg');
      let submitBtnEnt = document.querySelector('#submitEnt');
      let userName  = document.querySelector('#name');
      let userPW = document.querySelector('#password');
      let userEmail = document.querySelector('#email');
      let userEmailEnt  = document.querySelector('#emailEnt');
      let userPWEnt = document.querySelector('#passwordEnt');
      let enterBtn = document.querySelector('.enter');
      let registerBtn = document.querySelector('.register');
      let closeFormBtn = document.querySelector('.closeForm');
      let closeFormBtn2 = document.querySelector('.closeForm2');
      let musicBtn = document.querySelector('.music');
      let logoutBtn = document.querySelector('.logout');
      if(target.hash == '#play'){ //отрисовка игры в зависимости от уровня
        let level = target.id;
        level = window[level];
        this.model.updateState('play',level,target);
        this.listenKeyboard(level);// включить слушатели клавиатуры
        this.level  = level;
  
      };
      switch(target){
        case goBackbtn:
          this.model.goBack();
        break;
        case btnBackToLevels:
          this.model.updateState('levels');
        break;
        case submitBtnReg:
          this.model.addUser(userName.value,userEmail.value,userPW.value);
        break;
        case registerBtn:
          this.model.showRegForm();
        break;
        case enterBtn:
          this.model.showEntForm();
        break;
        case submitBtnEnt:
          this.model.loginUser(userEmailEnt.value,userPWEnt.value);
        case closeFormBtn:
          this.model.closeForm();
        break;
        case closeFormBtn2:
          this.model.closeForm();
        break;
        case musicBtn:
          if(musicBtn.className == 'music'){
            this.model.setAudio(false);
          }
          else if(musicBtn.className == 'music disabled'){
            this.model.setAudio(true);
          }
        break;
        case logoutBtn:
          this.model.logOut();
      }
 
    });
  }
  listenKeyboard = (level) => {
  if(this.container.querySelector('canvas')){
     document.addEventListener('keydown', this.keyHandler)}
  };
  keyHandler =(e) =>{
      let level = this.level;
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
  }
}