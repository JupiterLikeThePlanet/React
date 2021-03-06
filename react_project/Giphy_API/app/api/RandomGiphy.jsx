var axios = require('axios');



var PUBLIC_KEY = '&api_key=dc6zaTOxFJmzC'
// var api = api.giphy.com
// var endpoint = v1/gifs/search
// 'http://api.giphy.com/v1/gifs/search?q=' + SEARCH_QUERY [(e.g.)funny+cat] + '&api_key=' + PUBLIC_KEY [(e.g.)'dc6zaTOxFJmzC']

const GIPHY_RANDOM_URL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

module.exports = {

    getRandomGiphy: function(){
        //template strings ES6:  `${}`, executed as regular js expression
        // var randomURL = `${GIPHY_RANDOM_URL}&q=${encodedSearchItem}`;
        var randomURL = `${GIPHY_RANDOM_URL}`;

        // var requestURL = queryURL + PUBLIC_KEY

        return axios.get(randomURL).then(function (res) {
            // debugger;
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            // if (res.data.cod && res.data.meta.message){
            //     throw new Error(res.data.meta.msg);
            }else{


                var giphy_img_and_embed_url = {
                    img: "",
                    embed: ""
                };

                // console.log("random data")
                // console.log(res.data.data);
                giphy_img_and_embed_url.img = res.data.data.image_url;

                // giphy_img_and_embed_url.embed = res.data.data.image_url;
                giphy_img_and_embed_url.embed = res.data.data.image_original_url

                // console.log("Random info");
                // console.log(res.data.data)
                // console.log(giphy_img_and_embed_url);
                return giphy_img_and_embed_url
                // return res.data.data.image_url;
            }
        }, function (res) {
        	// throw new Error(res.data.meta.msg);
            throw new Error(res.data.message);
        });
    }
}