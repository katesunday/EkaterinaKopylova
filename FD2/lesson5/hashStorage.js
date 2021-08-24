class HashStorage{
    constructor(){
        this.storage_ = {};
    }
    addValue(key,value){
        this.storage_[key] = value;
        
    }
    getValue(key){
 
        return this.storage_[key];
    }
    deleteValue(key){
        if( !(key in this.storage_)){
            
            return false;
        }
        else{
            delete this.storage_[key];
           
            return true;
        }
    }
    getKeys(){
        return Object.keys(this.storage_);
        
    }
}
let coctailsStorage = new HashStorage();
 
coctailsStorage.addValue("Маргарита",{ isalcohol: true,
ingridients:['Водка Finlandia 50мл', 'Кофейный ликер 25мл','Лед в кубиках 120г'],
recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'});

coctailsStorage.addValue('Пеликан',{isalcohol: true,
ingridients: ['Гренадин Monin 10мл','Клубничный сироп Monin 10мл','Персиковый сок 150мл','Лимонный сок 15мл','Банан 110г','Клубника 50г','Дробленый лед 60г'],
recipe: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'
});

function showCoctail(){
    var name = prompt('Какой напиток хотите найти?', "Маргарита");
   
    coctailsStorage.getValue(name);
    
    if( coctailsStorage.storage_[name].isalcohol == true){
        document.getElementById('coctailname').innerHTML=(`Коктейль: "${name}" (алкогольный:да)`)
    }
    else{
        document.getElementById('coctailname').innerHTML=(`Коктейль: "${name}" (алкогольный:нет)`)
    }
    
    for( let key in coctailsStorage.storage_[name].ingridients){
     
        console.log(`${key}: ${coctailsStorage.storage_[name].ingridients[key]}`);
    
    }
 
    console.log(`Рецепт: ${coctailsStorage.storage_[name].recipe}`);

    document.getElementById('ing').innerHTML ="Необходимые ингридиенты:<br>" + coctailsStorage.storage_[name].ingridients;
    document.getElementById('recipe').innerHTML = "Рецепт:<br>"+ coctailsStorage.storage_[name].recipe;
    
}
function delCoctail(){
    var name = prompt('Введите название коктейля', "Маргарита");
   
       if( !(name in coctailsStorage.storage_)){
        alert('Нет такого напитка')
       }
       else{
        coctailsStorage.deleteValue(name);
           alert(`Коктейль "${name}" удален!`)
       }
   

}
function addRecipe(){
    var name = prompt('Введите название напитка.', "Имбирный чай");
    var isalcohol = prompt('Напиток алкогольный?', "нет");
    if( isalcohol == 'нет'){
        isalcohol = false;
    }
    else{
        isalcohol = true;
    }
    var ingridients = prompt('Перечислите ингридиенты.');
    var recipe = prompt('Напишите рецепт приготовления.')

    coctailsStorage.addValue(name,{isalcohol,
    ingridients,
    recipe,});
    alert(`Напиток "${name}" добавлен!`);
}

function listOfCoctails(){
    coctailsStorage.getKeys();
    document.getElementById('list').innerHTML=('Cписок коктейлей:'+'<br>'+
    (Object.keys(coctailsStorage.storage_).join("<br>")));
    
}