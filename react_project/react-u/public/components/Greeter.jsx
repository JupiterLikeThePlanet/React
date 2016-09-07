var React = require('react');
var ReactDOM = require('react-dom');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');


var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Bob Esponja',
            message: 'I hear the gnashing of teeth somewhere!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});



module.exports = Greeter;