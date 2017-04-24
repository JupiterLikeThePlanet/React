var React = require('react');
var Giphy = require('Giphy');
var RandomGiphy = require('RandomGiphy');


var GiphyForm = React.createClass({
	onImageUpdate: function(e) {
		// debugger
		console.log("ON image update")
		e.preventDefault();
		// var that = this;

		var imgVal = this.refs.search_image.value
		console.log(imgVal);
		console.log('onImageSearch pressed');

		this.props.onImageSearch(imgVal);

	},

	onRandomImageUpdate: function(e) {
		// debugger
		e.preventDefault();
		var that = this;
		console.log('Random pressed');
		RandomGiphy.getRandomGiphy().then(function (url) {
			that.props.onRandomSearch(url)
		});
			
	},

		// var imgVal = this.refs.search_image.value
		// console.log(imgVal);
				
		// if (imgVal.length > 0) {
		// 	RandomGiphy.getRandomGiphy(imgVal).then(function (url) {
		// 		that.props.onRandomSearch(url)
		// 	});
		// }

	
	render: function() {
		// var img = this.props.img; 

		return (

			<div>

				<div>
					<h3>Find a Gif</h3>
					<form onSubmit={this.onImageUpdate}>
						<input type="text" ref="search_image"/>
						<button>Giphy</button>
					</form>
					<br/>
					<img src={this.props.img} height="300" width="450"/>
				</div>
				
			</div>
			)
	}
})

module.exports = GiphyForm;