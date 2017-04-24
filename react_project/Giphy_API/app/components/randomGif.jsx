var React = require('React');

var randomGif = React.createClass({

	
		onRandomImageUpdate: function(e) {
		debugger
		e.preventDefault();
		var that = this;
		console.log('Random pressed');
		RandomGiphy.getRandomGiphy().then(function (url) {
			that.props.onRandomSearch(url)
		});
			
	},
})
