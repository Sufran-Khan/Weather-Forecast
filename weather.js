class Weather {

    constructor(city){
        this.city = city;
        this.state =
        this.apiKey = 'a332c6f86e783841e5617882dfe41b01';
    }

    async getWeather(){

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseData = await response.json();
        
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }

}