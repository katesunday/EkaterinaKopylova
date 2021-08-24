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
 
coctailsStorage.addValue("Маргарита",{ алкогольный: " да",
Ингридиенты:['Водка Finlandia 50мл\nКофейный ликер 25мл \nЛед в кубиках 120г'],
Рецепт: ['Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.']});

coctailsStorage.addValue('Пеликан',{алкогольный: " да",
Ингридиенты: ["\nГренадин Monin 10мл\nКлубничный сироп Monin 10мл\nПерсиковый сок 150мл\nЛимонный сок 15мл\nБанан 110г\nКлубника 50г\nДробленый лед 60г"],
Рецепт: ['\nПоложи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.']
});

function showCoctail(){
    var name = prompt('Какой напиток хотите найти?', "Маргарита");
   
    coctailsStorage.getValue(name);
    console.log(`Коктейль: "${name}":`)
    // if( coctailsStorage.isAlcohol == true){
    //     console.log(`Коктейль: "${name}" (алкогольный:да)`)
    // }
    // else{
    //     console.log(`Коктейль: "${name}" (алкогольный:нет)`)
    // }
    for( let key in coctailsStorage.storage_[name]){
        console.log(`${key}: ${coctailsStorage.storage_[name][key]}`);
      
    }
    
    
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

    coctailsStorage.addValue(name,{алкогольный: isalcohol,
    ингридиенты: ingridients,
    рецепт: recipe,});
    alert(`Напиток "${name}" добавлен!`);
}

function listOfCoctails(){
    coctailsStorage.getKeys();
    console.log('Cписок коктейлей:'+'\n'+
    (Object.keys(coctailsStorage.storage_).join("\n")));
    
}