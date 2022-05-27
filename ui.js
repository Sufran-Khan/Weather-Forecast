class Display{

    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        // this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure= document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }


    display(results){

        this.location.innerHTML = results.name + ', ' + (results.sys.country);
        
        this.desc.innerHTML = results.weather[0].main;

        //Temp conversion from Kelvin to Celsius/Farhenheit
        var cel = results.main.temp - 273.15
        console.log(cel.toFixed(1));

        var farh = (results.main.temp - 273.15) * 9/5 + 32;
        console.log(farh.toFixed(1));

        this.temp.innerHTML = farh.toFixed(1) + " F" + "  (" + cel.toFixed(1) + ' C)';

        //Icon call
        this.icon.innerHTML = `<img id='cloud' src="icons8-cloud-64.png" alt="" />`;

        //Feels like
        var cel2 = results.main.feels_like - 273.15
        console.log(cel2.toFixed(1));

        var farh = (results.main.feels_like - 273.15) * 9/5 + 32;
        console.log(farh.toFixed(1));

        this.feelsLike.innerHTML = 'Feels Like: ' + farh.toFixed(1) + " F" + "  (" + cel2.toFixed(1) + ' C)';

        //Humidity

        this.humidity.innerHTML = 'Relative Humidity: ' + results.main.humidity + '%';
        

        this.wind.innerHTML = 'Wind: From the NW at ' + results.wind.speed + ' km/h'; 

        this.pressure.innerHTML = 'Pressure: ' + results.main.pressure + ' mbar';







    }

}