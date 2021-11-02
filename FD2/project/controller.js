class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    window.addEventListener("hashchange", this.updateState);
    this.updateState(); 
    this.listeners();
    this.listenKeyboard();
    
  }
  updateState = ()=>{
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    this.model.updateState(hashPageName);
    this.listenKeyboard();
    
  }
  listeners = ()=>{
    document.addEventListener('click',(e)=>{
      let target = e.target;
      let goBackbtn = document.getElementById('goBack');
       if(target === goBackbtn){ //если таргет равен кнопке назад
         this.model.goBack();
       }
    });
  }
  listenKeyboard(){
  if(this.container.querySelector('canvas')){
     document.addEventListener('keydown', (e) =>{
      const playerCoords = findPlayerCoords();
      let direction = null;
      switch (e.key){
        case "ArrowRight":
          direction = 'right';
          this.model.movePlayer(playerCoords,direction);
        break;
        case "ArrowLeft":
          direction = 'left';
          this.model.movePlayer(playerCoords,direction);
        break;
        case "ArrowUp":
          direction = 'up';
          this.model.movePlayer(playerCoords,direction);
        break;
        case "ArrowDown":
          direction = 'down';
          this.model.movePlayer(playerCoords,direction);
        break;
        
      }
     })
  }
  }
}