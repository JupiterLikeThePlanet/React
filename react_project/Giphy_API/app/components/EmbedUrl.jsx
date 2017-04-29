var React = require('react');


var EmbedUrl = React.createClass({

	
	render: function() {
		var visibility = this.props.embed_url === ""  ? "hide_div" : "show_div" 
		var embed_url = this.props.embed_url
		console.log("State: embed_url");
		console.log(this.props.embed_url);
		console.log("visibility");
		console.log(visibility);


			return (

					<div className={visibility} id="embed_url">
						<p>Embed URL: {embed_url}</p>
					</div>

			)

		}

});

module.exports = EmbedUrl;

