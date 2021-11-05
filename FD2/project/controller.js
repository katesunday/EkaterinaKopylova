class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    this.level = null;
    window.addEventListener("hashchange", this.updateState);
    this.updateState(); 
    this.listeners();
    this.listenKeyboard();
    
  }
  updateState = ()=>{
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    if(hashPageName != 'play'){ //перерисовка плэй отдельно!
      this.model.updateState(hashPageName,this.level);
    }
  }

  listeners = ()=>{
    document.addEventListener('click',(e)=>{
      let target = e.target;
      let goBackbtn = document.getElementById('goBack');
      if(target.hash == '#play'){ //отрисовка игры в зависимости от уровня
        let level = target.id;
        level = window[level];
        this.model.updateState('play',level);
        this.listenKeyboard(level);// включить слушатели клавиатуры
      }
      else if(target == goBackbtn){
          this.model.goBack();
      }
    });
  }
  listenKeyboard(level){
  if(this.container.querySelector('canvas')){
     document.addEventListener('keydown', (e) =>{
      let direction = null;
      switch (e.key){
        case "ArrowRight":
          direction = 'right';
          this.model.movePlayer(direction,level);// передача направления и уровня
        break;
        case "ArrowLeft":
          direction = 'left';
          this.model.movePlayer(direction,level);
        break;
        case "ArrowUp":
          direction = 'up';
          this.model.movePlayer(direction,level);
        break;
        case "ArrowDown":
          direction = 'down';
          this.model.movePlayer(direction,level);
        break;
        
      }
     })
  }
  }
}