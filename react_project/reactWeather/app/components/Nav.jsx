var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    onSearch: function(e) {
        e.preventDefault();
        alert('waiting to exhale');
        console.log('not yet wired up');
    },

   render: function () {
       return (
           <div className="top-bar" id="nav_color">
               <div className="top-bar-left">
                   <img src="http://66.media.tumblr.com/423250121ed5a3ac57dae30244ab611c/tumblr_npin5ueiQT1sdedmbo1_500.gif" id="logo" />
                   <ul className="menu">
                       <li className="menu-text">Reactify Weather</li>
                       <li>
                           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Weather</IndexLink>
                       </li>

                       <li>
                           <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Our About Page </Link>
                       </li>

                       <li>
                           <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> The Examples Page </Link>
                       </li>

                   </ul>
               </div>
               <div className="top-bar-right">
                   <form onSubmit={this.onSearch}>
                       <ul className="menu">
                           <li>
                               <input type="search" placeholder="Search weather"/>
                           </li>
                           <li>
                               <input type="submit" className="button" value="Get Weather"/>
                           </li>
                       </ul>
                   </form>
               </div>
           </div>
       );
   }
});

// var Nav = () => {
//     return (
//         <div className="top-bar">
//             <div className="top-bar-left">
//                 <ul className="menu">
//                     <li className="menu-text">::React Weather App::</li>
//                     <li>
//                         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Weather</IndexLink>
//                     </li>
//
//                     <li>
//                         <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Our About Page </Link>
//                      </li>
//
//                     <li>
//                         <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> The Examples Page </Link>
//                     </li>
//
//                 </ul>
//
//
//             </div>
//         </div>
//     );
// }

module.exports = Nav;