var url = 'http://api.openweathermap.org/data/2.5/weather?q=jerusalem,palestina&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
// const url = 'weather.json';
document.getElementById("btn").addEventListener("click", cityReplacer);
function cityReplacer() {
  url = 'http://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById("city").value + ',palestina&units=metric&appid=1e8ffdb64b7d4d8dbdd4bf3a700bdeb0';
  // url = url.replace(/jerusalem/, document.getElementById("city").value);
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
  return url;
}

function reqListener() {
  var obj = JSON.parse(this.responseText)
  console.log(obj);
  var currentdate = new Date();
  var datetime = "Last Sync: " + currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear() + " @ " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ":" +
    currentdate.getSeconds();
  document.getElementById("weather").innerHTML = datetime + "<br>" + "City: " + obj.name + "<br>" + "Temp: " + obj.main.temp;
}

// 1e8ffdb64b7d4d8dbdd4bf3a700bdeb0
function weatherbox() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
}

setInterval(weatherbox, 5 * 1000);
