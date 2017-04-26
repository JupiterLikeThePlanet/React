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

		var embed_url = this.props.embed_url
		console.log("embed_url")
		console.log(embed_url)
		var visibility = this.props.embed_url === ""  ? "hide_div" : "show_div" 

		return (

			<div>

				<h3>Find a Gif</h3>
					
					<div className={visibility}>
						<p>Embed URL: {embed_url}</p>
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