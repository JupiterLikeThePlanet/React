var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            // location: 'Oz',
            // temp: '72'
            nowLoading: false
        };
    },

    handleSearch: function (location) {
        var that = this;

        this.setState({
            nowLoading: true
        });


        openWeatherMap.getTemp(location).then(function (temp){
            that.setState({
                location: location,
                temp: temp,
                nowLoading: false
            });

        }, function (errorMessage) {
            that.setState({
                nowLoading: false
            });
            alert(errorMessage)
        })

    },

    render: function () {
            var {nowLoading, location, temp} = this.state;

            var loadWeather = function(){
                if (nowLoading) {
                    return <h3>Now fetching weather ...</h3>;
                }else if (location, temp) {
                    return <WeatherMessage location={location} temp={temp}/>;
                }
            };

        return (
            <div>
                <h2>Check out some Weather</h2>
                <br/>
                <WeatherForm onSearch={this.handleSearch} location={location}/>
                <br/>
                {loadWeather()}
            </div>
        );
    }
});

module.exports = Weather;