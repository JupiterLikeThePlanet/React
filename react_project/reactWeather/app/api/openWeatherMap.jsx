var axios = require('axios');

// ab3ed1b721acb5dfe79b970040ed06d
// var url = "http://api.openweathermap.org/data/2.5/weather?appid=ab3ed1b721acb5dfe79b970040ed06d0&q="+ encodedLocation +"&units=imperial"



const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ab3ed1b721acb5dfe79b970040ed06d0&units=imperial';

module.exports = {

    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        //template strings ES6:  `${}`, executed as regular js expression
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function (res) {
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}