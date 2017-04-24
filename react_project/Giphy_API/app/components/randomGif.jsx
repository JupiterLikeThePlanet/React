var React = require('React');

var RandomGif = React.createClass({

	
	render: function() {


			return (

				<div>

					<form onClick={this.props.onRandomSearch}>
						<button> Random GIF </button>
					</form>
			
				</div>

			)

		}

});

module.exports = RandomGif;

