var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            nowLoading: false
        };
    },

    handleSearch: function (location) {
        var that = this;

        this.setState({
            nowLoading: true,
            errorMessage: undefined
        });


        openWeatherMap.getTemp(location).then(function (temp){
            that.setState({
                location: location,
                temp: temp,
                nowLoading: false
            });

        }, function (err) {
            that.setState({
                nowLoading: false,
                errorMessage: err.message
            });
        })

    },

    render: function () {
            var {nowLoading, location, temp, errorMessage} = this.state;

            var loadWeather = function(){
                if (nowLoading) {
                    return <h3>Now fetching weather ...</h3>;
                }else if (location, temp) {
                    return <WeatherMessage location={location} temp={temp}/>;
                }
            };

            var renderError = function () {
                if (typeof errorMessage === 'string') {
                   return (
                            <ErrorModal/>
                       )
                }
            };

        return (
            <div>
                <h2>Check out some Weather</h2>

                <WeatherForm onSearch={this.handleSearch} location={location}/>

                {loadWeather()}
                {renderError()}

            </div>
        );
    }
});

module.exports = Weather;