var React = require('React');

var RandomGif = React.createClass({

	
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

