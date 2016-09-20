var React = require('react');

// var WeatherMessage = React.createClass ({
//     render: function () {
//          // var {location, temp} = this.props
//         var location = this.props.location;
//         var temp = this.props.temp;
//
//         return (
//            <div>
//                 <h4>It is {temp} degrees in {location}</h4>
//            </div>
//        );
//     }
// });


///////////////// ES6 Refactor ///////////////////////////////////////////////////////////
// var WeatherMessage = (props) => {
//     var {temp, location} = props
// but a better way rewritten has props written deep in the code so you do this //////////

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h4>It is {temp} degrees in {location}</h4>
        </div>
    );
}

module.exports = WeatherMessage;