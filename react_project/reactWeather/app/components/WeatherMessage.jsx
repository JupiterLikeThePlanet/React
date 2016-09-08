var React = require('react');

var WeatherMessage = React.createClass ({
    render: function () {

        var message = this.props.messages;

        return (
           <div>
                <h4>{message}</h4>
           </div>
       );
    }
});

module.exports = WeatherMessage;