var weatherRequest = new XMLHttpRequest();


weatherRequest.open('GET','http://samples.openweathermap.org/data/2.5/weather?q=Bozeman,us&appid=8753dae87f137fbbcd11f2a5bcca33da', true);

weatherRequest.send();

weatherRequest.onload = function() {
var weatherInfo = JSON.parse(weatherRequest.responseText);
console.log(weatherInfo);

document.getElementById('city').innerHTML = weatherInfo.name;
document.getElementById('current').innerHTML = weatherInfo.main.temp;
document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;
document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
document.getElementById('lowtemp').innerHTML = weatherInfo.main.temp_min;
document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;

var icon = 'https://openweathermap.org/img/w/' + weatherInfo.weather["0"].icon + '.png';
document.getElementById('weatherimage').src= icon;
}