var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
   render: function () {
       return (
           <div>
               <h3>nav bar here</h3>
               <Link to="/">Your Weather</Link>
               <br/>
               <Link to="about"> Our About Page </Link>
               <br/>
               <Link to="examples"> The Examples Page </Link>
           </div>
       );
   }
});

module.exports = Nav;