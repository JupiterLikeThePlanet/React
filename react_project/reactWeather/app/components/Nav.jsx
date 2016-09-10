var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
   render: function () {
       return (
           <div>
               <h3>nav bar here</h3>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Weather</IndexLink>
               <br/>
               <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Our About Page </Link>
               <br/>
               <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> The Examples Page </Link>
           </div>
       );
   }
});

module.exports = Nav;