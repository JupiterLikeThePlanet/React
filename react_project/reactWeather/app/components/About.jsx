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
        <div>
            <h2>About component has rendered</h2>
        </div>
    );
};

module.exports = About;