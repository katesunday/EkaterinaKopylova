class HashStorage{
    constructor(){
        this.storage_ = {};
    }
    addValue(key,value){
        this.storage_[key] = value;
        
    }
    getValue(key){
        
        console.log(this.storage_[key])
      
        return this.storage_[key];
    }
    deleteValue(key){
        if( !(key in this.storage_)){
            alert('Нет такого напитка')
            return false;
            
        }
        else{
            delete this.storage_[key];
            alert(`Коктейль "${key}" удален!`)
            return true;
        }
    }
    getKeys(){
        console.log(Object.keys(this.storage_).join("\n"));
        return Object.keys(this.storage_);
        
    }
}
let coctailsStorage = new HashStorage();
 
coctailsStorage.addValue("Маргарита",{ алкогольный: 'да',
 ингридиенты: 'Водка Finlandia 50мл\nКофейный ликер 25мл \n Лед в кубиках 120г',
рецепт: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'});

coctailsStorage.addValue('Пеликан',{алкогольный: "да",
ингридиенты: "Гренадин Monin 10мл\nКлубничный сироп Monin 10мл\nПерсиковый сок 150мл\nЛимонный сок 15мл\nБанан 110г\nКлубника 50г\nДробленый лед 60г",
рецепт: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'
});

function delCoctail(){
    var name = prompt('Введите название коктейля', "Маргарита");
   
   coctailsStorage.deleteValue(name);
}
function addRecipe(){
    var name = prompt('Введите название напитка.', "Имбирный чай");
    var isalcohol = prompt('Напиток алкогольный?', "нет");
    var ingridients = prompt('Перечислите ингридиенты.');
    var recipe = prompt('Напишите рецепт приготовления.')

    coctailsStorage.addValue(name,{алкогольный: isalcohol,
    ингридиенты: ingridients,
    рецепт: recipe,});
    alert(`Напиток "${name}" добавлен!`);
}
function showCoctail(){
    var name = prompt('Какой напиток хотите найти?', "Маргарита");
    coctailsStorage.getValue(name);
    
}
function listOfCoctails(){
    coctailsStorage.getKeys();
    
}