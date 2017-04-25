var React = require('react');
var Giphy = require('Giphy');
var RandomGiphy = require('RandomGiphy');


var GiphyForm = React.createClass({
	onImageUpdate: function(e) {

		e.preventDefault();

		var imgVal = this.refs.search_image.value

		this.props.onImageSearch(imgVal);

	},

	
	render: function() {
		var show_div = this.props.embed_url != ""  ? "display: inline" : "display: none"
		var embed_url = this.props.embed_url

		return (

			<div>

				<h3>Find a Gif</h3>
					
					<div styles= {show_div}>
						<p>Embed URL: </p>
					</div>
					
				<img src={this.props.img} height="300" width="450"/>
				<br/>
				<form onSubmit={this.onImageUpdate}>
					<input type="text" ref="search_image"/>
					<button>Giphy</button>
				</form>
				
			</div>
		)
	}
})

module.exports = GiphyForm;