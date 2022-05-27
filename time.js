
const ui = new Display();

const storage = new Storage();

//getting location from local Storage
const loc = storage.getLocation();

const weatherobj = new Weather(loc);

// weatherobj.changeLocation('Mumbai');

var btnui = document.getElementsByClassName('btn');

var city = document.getElementById('w-location');
var climate = document.getElementById('w-desc');
var temp = document.getElementById('w-temp');
var icon = document.getElementById('w-icon');

//Listening the  save changes btn

var change = document.getElementById("saveNewLoc");
var NewLoc = document.getElementById('fname');


//Calling getWeather on loading website

document.addEventListener('DOMContentLoaded', getWeather);

change.addEventListener('click', changeLoc);


function changeLoc(){
    console.log(NewLoc.value);

    weatherobj.changeLocation(NewLoc.value);

    getWeather();
    storage.setLocation(NewLoc.value);
    NewLoc.value = '';
}





function getWeather(){
    console.log('working');

    weatherobj.getWeather()
    .then( results =>{
        console.log(results);
        ui.display(results);

        // city.innerHTML = results.name + ', ' + (results.sys.country);
        
        // climate.innerHTML = results.weather[0].main;

        // // var cel = Math.round((results.main.temp - 273.15) * 10)/10;
        // var cel2 = results.main.temp - 273.15

        // console.log(cel2.toFixed(1));

        // var farh = (results.main.temp - 273.15) * 9/5 + 32;
        // console.log(farh.toFixed(1));

        // temp.innerHTML = farh.toFixed(1) + " F" + "  (" + cel2.toFixed(1) + ' C)';

        // icon.innerHTML = `<img id='cloud' src="icons8-cloud-64.png" alt="" />`;
        // <img src="icons8-cloud-64.png" alt="" />
        // results.weather[0].icon;



    })



    .catch(err => console.log(err));
}



// weatherobj.getWeather()
//     .then( results =>{
//         console.log(results);
//     })
//     .catch(err => console.log(err));








var uiClock = document.getElementById('date-time');

realTimeClock();

function realTimeClock(){



    var dt = new Date();

    var hours = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();

    var amPm = (hours > 12) ? 'PM' : 'AM';

    //adding leading  zeros to single digits

    hours = ('0' + hours).slice(-2);
    sec = ('0'+ sec).slice(-2);
    min = ('0'+ min).slice(-2);


    uiClock.innerHTML = hours + ':' + min + ':' + sec + ' ' + amPm;

    var t = setTimeout(realTimeClock, 1000);




}



// fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=50a7aa80fa492fa92e874d23ad061374')
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })