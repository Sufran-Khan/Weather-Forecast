class Storage{

    constructor(){
        this.city;
        this.defaultCity = 'Boston';

    }

    setLocation(city){
        localStorage.setItem('city', city);
    }

    getLocation(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;

        }else{
            this.city = localStorage.getItem('city');
        }

        return this.city;

    }




}