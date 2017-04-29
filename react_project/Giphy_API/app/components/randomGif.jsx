var React = require('React');

var RandomGif = React.createClass({

	onRandomUpdate: function(e) {

	e.preventDefault();

	var imgVal = this.refs.search_image.value

	this.props.onRandomSearch(imgVal);

	},

	
	render: function() {


			return (

				<div id="random_gif_button">

					<form onClick={this.props.onRandomSearch}>
						<button> Random </button>
					</form>
			
				</div>

			)

		}

});

module.exports = RandomGif;

