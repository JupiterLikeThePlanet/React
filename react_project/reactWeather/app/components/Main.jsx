var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <Nav/>
//                <h2>Main component renders here</h2>
//                     {this.props.children}
//            </div>
//        );
//    }
// });

//refactored for es6.  Actually uses props so drop the 'this'

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main component renders here</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;