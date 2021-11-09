class Model {
  constructor(_view) {
    this.view = _view;
    this.direction = null;
    this.map = null;
    this.level = null;
    this.countMove = 0;
    this.countT = 0;
    this.isAudio = true;
   window.location.hash = "menu"; //ИСПРАВИТЬ!!!!!
  }

  updateState(hashPageName,level,targetLevel) { // SPA
    
    if(hashPageName==='play'){
      this.view.renderContent(hashPageName,this.countMove);
      this.view.showMoves(this.countMove);
      this.view.showLevel(targetLevel);
      this.map = this.deepCopy(level);//создать глубокую копию уровня, чтобы работать только с копией
    }
    else{
      this.view.renderContent(hashPageName);
      this.countMove = 0;
      
    }

  }
  goBack() { // возврат в меню
    this.view.renderContent('menu');
  }
 //ф-я глубокого копирования
 deepCopy = (arr) => {
  var out = [];
  for (var i = 0, len = arr.length; i < len; i++) {
      var item = arr[i];
      var obj = [];
      for (var k in item) {
          obj[k] = item[k];
      }
      out.push(obj);
  }
  this.view.drawField(this.direction,out);
  return out;
  };
 

  movePlayer(direction,level){
    const playerCoords = this.findPlayerCoords(this.map);// взять координаты из копии
    const newPlayerY = this.getY(playerCoords.y, direction, 1)
    const newPlayerX = this.getX(playerCoords.x, direction, 1)
    
    // ЛОГИКА ИГРОКА
    //оставлять за собой фон и цели исходя из карты уровня (не копии)
    this.map[playerCoords.y][playerCoords.x] =
    this.isTarget(level[playerCoords.y][playerCoords.x]) ? 4 : 2;
    if (this.isAudio) {audioWalking.play()};
    
    //если есть стена, то шаг = 0
    if (this.isWall(this.map[newPlayerY][newPlayerX])) {
      this.map[this.getY(playerCoords.y, direction, 0)][this.getX(playerCoords.x, direction, 0)] = 1;
      this.view.drawField(direction,this.map);
      if (this.isAudio){audioWalking.pause();
      audioWall.play()};
      console.log('рядом стена')
    }
       // если за игроком куб, то
       else if(this.isBrick(this.map[newPlayerY][newPlayerX])){
	        console.log('рядом куб');
          //если через 2 шага там НЕ стена и НЕ куб, то сдвигаем игрока на 1 шаг а кубик на 2 от игрока соотвественно 
	           if (this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] != 0 && this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] != 3) {
                // если через два шага НЕ цель, то двигает игрока и кубик
                if(this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] != 4){
                  this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
                  this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 3;
                } 
                // если там ЦЕЛЬ, то кубик делаем зеленым( т.е успешным)
                else{
                  this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 5;
                  if (this.isAudio){audioSuccess.play()};
                  this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
                }
	            } 
             //а если там стена, то игрока не двигать больше
             else {
              this.map[this.getY(playerCoords.y, direction, 0)][this.getX(playerCoords.x, direction, 0)] = 1;
              this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 3;
	           }
             this.view.drawField(direction,this.map);
       }
       //если за игроком ЗЕЛЕНЫЙ КУБ, то при движении куб сделать обычным
      else if(this.isSuccess(this.map[newPlayerY][newPlayerX])){
          //если через 2 шага там НЕ стена, то сдвигаем игрока на 1 шаг а кубик на 2 от игрока соотвественно 
          if (this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] == 2) {
            this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
            this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 3;
          }
          //а если две цели подряд
          else if (this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] == 4){
            this.map[this.getY(playerCoords.y, direction, 2)][this.getX(playerCoords.x, direction, 2)] = 5;
            if (this.isAudio){audioSuccess.play()};
            this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
          } 
          else{
            this.map[this.getY(playerCoords.y, direction, 0)][this.getX(playerCoords.x, direction, 0)] = 1;
          }
    
          this.view.drawField(direction,this.map);
      }
    else{
      this.map[this.getY(playerCoords.y, direction, 1)][this.getX(playerCoords.x, direction, 1)] = 1;
      this.view.drawField(direction,this.map);
    }
    this.countTargets(this.map);// считать цели
    
  };



 findPlayerCoords = (map)=> { //найти координаты игрока
   const y = map.findIndex(row => row.includes(1));// если в строке есть игрок дать его индекс
   const x = map[y].indexOf(1); //дать его индекс в строке 
    return {
      x,
      y,
      above: map[y - 1][x],
      below: map[y + 1][x],
      sideLeft: map[y][x - 1],
      sideRight: map[y][x + 1],
       }
  };
  // функции поиска соседних блоков
 isBrick = (cell) => [3].includes(cell);// есть ли кубик в клетке
 isPlayer = (cell) => [1].includes(cell);
 isTraversible = (cell) => [2].includes(cell);
 isWall = (cell) => [0].includes(cell);
 isTarget = (cell) => [4].includes(cell);
 isSuccess = (cell) => [5].includes(cell);

 getX = (x, direction, spaces = 1) => {
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

 getY = (y, direction, spaces = 1) => {
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

  setAudio = (arg) =>{
    this.isAudio = arg;
    this.view.changeMusicBtn();
   
  }
  //ф-я подсчета целей
  countTargets = (map)=>{
    let countT = [];
    map.forEach((row, y) => { // взять каждую строку по У вниз
      row.forEach((cell, x) => { // каждую клетку 
        if(cell == 3){
          countT.push(cell);
        }
      })
    })
    if(countT.length == 0){
        this.view.showModal();
        if (this.isAudio){audioSuccess.play()};
        
    }
  };

  countMoves = () =>{
    this.countMove++;
    this.view.showMoves(this.countMove);
  }

  addUser = (userName,userEmail,password) =>{
    myDB.ref('users/' + `user_${userName.replace(/\s/g, "").toLowerCase()}`).set({
      username: `${userName}`,
      email: `${userEmail}`,
      password: `${password}`
     })
    .then(function (userName) {
      console.log("Пользователь добавлен в коллецию users");
     })
     .catch(function (error) {
      console.error("Ошибка добавления пользователя: ", error);
     });
  }

  loginUser = (userEmail,password) =>{
      if (userEmail && password) {
        firebase.auth().signInWithEmailAndPassword(userEmail, password)
        .catch(function(error) {
          console.log("Error: " + error.message);
          // myAppView.loginError("Неверный email или пароль. Введите корректные данные.");
        });

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            console.log(`Hi, ${user}!`)
          } else {
            console.log('No user is signed in');
            
          }
        });
    }
  }
  showRegForm = () => {
    this.view.showRegForm();
  }
  showEntForm = () => {
    this.view.showEntForm();
  }
  closeForm = () =>{
    this.view.closeForm();
  }
}