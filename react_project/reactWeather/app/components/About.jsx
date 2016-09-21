var React = require('react');



// var About = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>About component has rendered</h2>
//             </div>
//         );
//     }
// });

// refactor because it is stateless

var About = (props) => {
    return (
        <div className="text-left">

            <h2>About this app</h2>

            <ol>
                <li><a href="https://openweathermap.org/">Uses OpenWeather API</a></li>
                <li><a href="https://facebook.github.io/react/">Built with React</a></li>
                <li><a href="https://github.com/andrewjmead">With tutorials from Andrew Mead</a></li>
            </ol>

        </div>
    );
};

module.exports = About;