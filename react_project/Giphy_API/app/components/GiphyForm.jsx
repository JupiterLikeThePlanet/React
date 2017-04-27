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
					
					<div className={visibility} id="embed_url">
						<p>Embed URL: {embed_url}</p>
					</div>
					
				<img src={this.props.img} height="300" width="450"/>
				<br/>
				<div className="input-group">
					<form  onSubmit={this.onImageUpdate}>
						<input className="input-group-field" type="text" ref="search_image"/>
						<div className="input-group-button">
							<button>Giphy</button>
						</div>
					</form>
				</div>
				
			</div>
		)
	}
})

module.exports = GiphyForm;