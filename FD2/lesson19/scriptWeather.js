function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    if (err.code === 1) {
        loading.innerText = 'Вы выключили геопозицию, без нее я не могу показать погоду:-(';
    }
    else if (err.code === 3) {
        loading.innerText = 'Что-то пошло не так! Перезагрузите страничку:-(';
    };
}
function WeatherWidget(){
    var options = {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 0
    };
    const apiUrl = "https://api.openweathermap.org/data/2.5/";
    const apiKey = "e587edc459f28977266d4c06b5782635";
    let weatherDiv = null;
    let buttonShowWeather = null;
    let threeDaysWeather = null;

    this.createField = function(){
        weatherDiv = document.createElement('div');
        weatherDiv.id = 'weather';
        buttonShowWeather = document.createElement('button');
        buttonShowWeather.id = 'showWeather';
        buttonShowWeather.innerText = '>>';
        let layout = `
        <button id="hideWeather"><<</button>
        <h1>Погода</h1>
        <object id="svgIcon" type="image/svg+xml" data="sun.svg" width="40" height="40" >
        Your browser does not support SVG
        </object>
        <p id = 'loading'>Гружу ваше местоположение...</p>
        <h2 id="location"></h2>
        <h3 id="temp-icon"></h3>
        <div id="temp"></div>
        <div id="description"></div>
        <div id="image"></div>
        <div id="wind"></div>
        <button id="showForecast">Посмотреть погоду на три дня</button>
        <div id = 'threeDays'>
        <button id="closeForecast">Свернуть</button>
        <object id="svgIcon2" type="image/svg+xml" data="loader.svg" width="30" height="30" >
        Your browser does not support SVG
        </object>
        <div id = 'firstDay'></div>
        <div id = 'secondDay'></div>
        <div id = 'thirdDay'></div>
        </div>`;
        
        weatherDiv.innerHTML = layout;
        document.body.prepend(buttonShowWeather);
        document.body.append(weatherDiv);

    }
 

   weatherForecast = function(pos){
       let crd = pos.coords;
       let loaderSvg2 = document.getElementById('svgIcon2');
       const apiQuery3 = apiUrl+"forecast?lat="+crd.latitude+"&lon="+crd.longitude+"&cnt=3&units=metric&lang=ru&appid="+apiKey;
       fetch(apiQuery3)// получение погоды на три дня
       .then(response => response.json())
       .then(data => printDataThree(data))
       .catch(error => console.error('Причина ошибки: '+ error));
    //    this.error = function (err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);}
        printDataThree = function(data){ // функция для отображения погоды на три дня 
            console.log(data);
     
            loaderSvg2.style.display = 'none';

            let firstDay = document.getElementById('firstDay');
            let secondDay = document.getElementById('secondDay');
            let thirdDay = document.getElementById('thirdDay');
   
            firstDay.innerHTML = `<strong>${new Date().getDate()+1}/${(new Date().getMonth()+1)}</strong><p>Температура: 
                                  <strong>${data.list[0].main.temp}&#176;C</strong> </p>
                                  <p>На улице: ${data.list[0].weather[0].description}, влажность: ${data.list[0].main.humidity}%</p>`;
            secondDay.innerHTML = `<strong>${new Date().getDate()+2}/${(new Date().getMonth()+1)}</strong><p>Температура:
                                  <strong>${data.list[1].main.temp}&#176;C</strong> </p>
                                  <p>На улице: ${data.list[1].weather[0].description}, влажность: ${data.list[0].main.humidity}%</p>`;
            thirdDay.innerHTML = `<strong>${new Date().getDate()+3}/${(new Date().getMonth()+1)}</strong><p>Температура:
                                  <strong>${data.list[2].main.temp}&#176;C </strong></p>
                                  <p>На улице: ${data.list[2].weather[0].description}, влажность: ${data.list[0].main.humidity}%</p>`;
        };
   };
   this.todayWeather = function(pos) {
       console.log(pos);
       let crd = pos.coords;
       let loading = document.getElementById('loading');

       console.log('Ваше текущее местоположение:');
       console.log(`Широта: ${crd.latitude}`);
       console.log(`Долгота: ${crd.longitude}`);
       console.log(`Плюс-минус ${crd.accuracy} метров.`);

       const apiQuery = apiUrl+"weather?lat="+crd.latitude+"&lon="+crd.longitude+"&units=metric&lang=ru&appid="+apiKey;
      
       fetch(apiQuery)//  получение данных для одного дня
         .then(response => response.json())
         .then(data => this.printData(data))
         .catch(error => console.error('Причина ошибки: '+ error));
  
        printData = function(data){ // фунцкия для отображения погоды на сегодня
           console.log(data);
           let locationName = document.getElementById('location');
           let tempIcon = document.getElementById('temp-icon');
           let temp = document.getElementById('temp');
           let description = document.getElementById('description');
           let image = document.getElementById('image');
           let wind = document.getElementById('wind');
           let hideBtn = document.getElementById('hideWeather');
           let showBtn = document.getElementById('showWeather');
           let loaderSvg = document.getElementById('svgIcon');
           let loading = document.getElementById('loading');
           loaderSvg.style.display = 'none';
           loading.style.display = 'none';
    
            // &#176;C это обозначение градуса по Цельсию
            locationName.innerHTML = (`${data.name},${data.sys.country}`);
            tempIcon.innerHTML = (`${data.main.temp} &#176;C <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`);
            temp.innerHTML = `Температура сейчас равна: <strong>${data.main.temp} &#176;C</strong>,
                        но ощущается как <strong>${data.main.feels_like} &#176;C</strong>.`;
            description.innerHTML = `В целом на улице: <strong>${data.weather[0].description} </strong>, 
                        влажность: <strong>${data.main.humidity}%</strong>.`;
            wind.innerHTML = `А скорость ветра составляет: <strong>${data.wind.speed} м/с</strong>.`;
        };
   }

   this.listeners = function(){
    let hideBtn = document.getElementById('hideWeather');
    let showBtn = document.getElementById('showWeather');
    let forecastBtn = document.getElementById('showForecast');
    let closeForecastBtn = document.getElementById('closeForecast');
    let threeDaysDiv = document.getElementById('threeDays');
    hideBtn.addEventListener('click',function(e){
    e.preventDefault();
    weatherDiv.style.display = 'none';
    showBtn.style.display = 'block';
    });
    showBtn.addEventListener('click',function(e){
    e.preventDefault();
    weatherDiv.style.display = 'block';
    showBtn.style.display = 'none';
     });
     forecastBtn.addEventListener('click',function(e){
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(weatherForecast, error, options);
        threeDaysDiv.style.display = 'block';
        forecastBtn.style.display = 'none';
         });
        closeForecastBtn.addEventListener('click',function(e){
        e.preventDefault();
        threeDaysDiv.style.display = 'none';
        forecastBtn.style.display = 'block';
         });
   };

    this.getWeather = function(){
        this.createField();
        navigator.geolocation.getCurrentPosition(this.todayWeather, error, options);
        this.listeners();
    };
}

