var React = require('react');
var ReactDOM = require('react-dom');
var objOne = {
    name: 'Jupiter',
    city: 'Los Angeles'
};

var objTwo = {
    age: 31,
    ...objOne
};

console.log(objTwo);



ReactDOM.render(
    <h1>Boilerplate, do you work?</h1>,
    document.getElementById('app')
);