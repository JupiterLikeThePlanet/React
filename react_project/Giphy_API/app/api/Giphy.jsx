var axios = require('axios');



var PUBLIC_KEY = '&api_key=dc6zaTOxFJmzC'
// var api = api.giphy.com
// var endpoint = v1/gifs/search
// 'http://api.giphy.com/v1/gifs/search?q=' + SEARCH_QUERY [(e.g.)funny+cat] + '&api_key=' + PUBLIC_KEY [(e.g.)'dc6zaTOxFJmzC']
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?'

module.exports = {

    getGiphy: function(search_item){
        var encodedSearchItem = encodeURIComponent(search_item);
        //template strings ES6:  `${}`, executed as regular js expression
        var queryURL = `${GIPHY_URL}&q=${encodedSearchItem}`;
        var requestURL = queryURL + PUBLIC_KEY

        return axios.get(requestURL).then(function (res) {
            // debugger;
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
            	var resDataData = res.data.data
            	var resDataDataLength = resDataData.length
            	var random = Math.random() * (resDataDataLength - 0) + 0
            	var num = Math.floor(random)
                return res.data.data[num].images.original.url;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}



