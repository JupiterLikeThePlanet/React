var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main')

// Loads foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

// Loads CSS
require("style!css!sass!applicationStyles")


ReactDOM.render(
	<div>
	    <Main/>
    </div>,
    document.getElementById('app')
);