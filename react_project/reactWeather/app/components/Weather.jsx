var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            city: 'Oz',
            degrees: '72',
            message: 'Check out the weather'
        };
    },
    //
    // getInitialState: function () {
    //     return {
    //             city: this.props.city,
    //             degrees: this.props.degrees,
    //             message: 'It is ' + {degrees} + ' degrees in ' + {city} +'.'
    //     };
    // },

        //     var city = this.state.city;
        //     var message = this.state.message


    render: function () {
            var city = this.props.city;
            var message = this.props.message
        return (
            <div>
                <h2>Check out some Weather</h2>
                <br/>
                <WeatherForm/>
                <br/>
                <WeatherMessage city={city} message={message}/>
            </div>
        );
    }
});

module.exports = Weather;