var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Oz',
            temp: '72'
            // message: 'Check out the weather'
        };
    },

    handleSearch: function (location) {
        var that = this;
        openWeatherMap.getTemp(location).then(function (temp){
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage)
        })

    },

    render: function () {
            var location = this.state.location;
            var temp = this.state.temp
        return (
            <div>
                <h2>Check out some Weather</h2>
                <br/>
                <WeatherForm onSearch={this.handleSearch} location={location}/>
                <br/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        );
    }
});

module.exports = Weather;