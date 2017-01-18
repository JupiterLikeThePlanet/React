var React = require('react');
var Giphy = require('Giphy');
var AddCaption = require('AddCaption')


var Main = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'Main',
			img: 'https://media.tenor.co/images/bf5c091558cad114ab73485814d9c1bc/raw',
			caption: 'Add a Caption'
		};
	},

	getInitialState: function() {
		return {
			name: this.props.name,
			img: this.props.img,
			caption: this.props.caption
		};
	},

	onButtonPress: function(e) {
		e.preventDefault();

		var nameVal = this.refs.name.value
		// console.log(nameVal);
		// console.log('pressed');
		if (nameVal.length > 0) {		
			this.setState({
				name: nameVal
			});
		}

	},

	onImageSearch: function(e) {
		e.preventDefault();
		var that = this;

		var imgVal = this.refs.search_image.value
		console.log(imgVal);
		console.log('onImageSearch pressed');

		if (imgVal.length > 0) {
			Giphy.getGiphy(imgVal).then(function (url) {
				that.setState({
					img: url
				});
			});
		}

	},

	onCaptionSubmit: function(e, caption){
		
		e.preventDefault()
		// var target_value = e.target.value
		// console.log('caption america');
		// console.log(target_value);
		// debugger

		// var captionVal = this.refs.caption.value
		var captionVal = caption

		console.log(captionVal);
		console.log('captionVal pressed');
		debugger

		if (captionVal.length > 0) {
				this.setState({
					caption: captionVal
				});
			};

		console.log("New Caption state: " + this.state.caption);
		debugger
	},



	render: function() {
		console.log(this.state.name);
		console.log(this.state.img);
		var caption = this.state.caption; 

		return (

			<div>

				<div>
					<h3>{this.state.name} Rendered</h3>
					<form onSubmit={this.onButtonPress}>
						<input type="text" ref="name"/>
						<button>Press me</button>
					</form>
					<br/>
				</div>
				
				<div>
					<h3>Render an image</h3>
					<form onSubmit={this.onImageSearch}>
						<input type="text" ref="search_image"/>
						<button>Giphy</button>
					</form>
					<br/>
					<img src={this.state.img}/>
				</div>
	
				<AddCaption onCaptionSubmit={this.onCaptionSubmit} caption={caption}/>
			
			</div>

		)

	}

});

module.exports = Main;