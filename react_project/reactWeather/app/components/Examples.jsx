var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>Example goes here</h2>
//             </div>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Try out these examples</p>
            <ol>
                <li><Link to="/?location=Los Angeles">Los Angeles</Link></li>
                <li><Link to="/?location=NewOrleans">New Orleans, Louisiana</Link></li>
                <li><Link to="/?location=Toronto">Toronto, Canada</Link></li>
                <li> <Link to="/?location=helsinki">Helsinki, Finland</Link></li>
                <li><Link to="/?location=Lagos">Lagos, Nigeria</Link></li>
                <li><Link to="/?location=Quito">Quito, Ecuador</Link></li>
            </ol>
        </div>
    );
}

module.exports = Examples;