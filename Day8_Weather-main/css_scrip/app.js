var input = document.querySelector('.weather input');
var  city = document.querySelector('.weather h2');
var  time = document.querySelector('.weather p');
var temperature = document.querySelector('.temperature');
var short = document.querySelector('.weather h1');
var visibility = document.querySelector('.visibility p');
var wind = document.querySelector('.wind p');
var cloud = document.querySelector('.cloud p');
var content = document.querySelector('.content');
var app = document.querySelector('.app');
var weather = document.querySelector('.weather');

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();
 function loadWeather(){
    var inputvalue = input.value.trim();
    var API =`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=36cb3808a0974fd911f7a6c277c814f6` 
    fetch(API)
        .then((response) => response.json())
        .then(function (data) {        
            if(data.cod === 200) {
                city.innerText = data.name;
                visibility.innerText = `${data.visibility} (m/s)`;
                wind.innerText = `${data.wind.speed} (m/s)`;
                cloud.innerText = `${data.main.humidity} (%)`;
                short.innerText = `${data.weather[0].main}`;
                time.innerText = hour +':' + minute +':' + second + '  ' + day + ':' + month + ':' + year ;       
                var do_c =Math.floor(data.main.temp - 273,15)
                temperature.innerText =do_c;  
                content.classList.remove('hide');
                if(do_c <20){
                    app.classList.add('cold');
                    weather.classList.add('cold');
                }else{
                    app.classList.remove('cold');
                    weather.classList.remove('cold');
                }
            }else{
                content.classList.add('hide');
            }           
        });
}



input.addEventListener('keydown', function (event) {
    if(event.which ===13){
        loadWeather()
    }
})


// cach 2 
// async function loadWeather1() {
//  var API =`https://api.openweathermap.org/data/2.5/weather?q=ha noi&appid=36cb3808a0974fd911f7a6c277c814f6`
//     var data = await fetch(API).then(res=>res.json());
//     console.log(data)
// }
// loadWeather1();