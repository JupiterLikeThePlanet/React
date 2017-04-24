var React = require('react');
var Giphy = require('Giphy');
var GiphyForm = require('GiphyForm')
var AddCaption = require('AddCaption')


var Main = React.createClass({
	getDefaultProps: function(){
		return {
			// name: 'Main',
			img: 'https://media.tenor.co/images/bf5c091558cad114ab73485814d9c1bc/raw',
			caption: 'Add a Caption'
		};
	},

	getInitialState: function() {
		return {
			// name: this.props.name,
			img: this.props.img,
			caption: this.props.caption
		};
	},

	// onButtonPress: function(e) {
	// 	e.preventDefault();

	// 	var nameVal = this.refs.name.value
	// 	// console.log(nameVal);
	// 	// console.log('pressed');
	// 	if (nameVal.length > 0) {		
	// 		this.setState({
	// 			name: nameVal
	// 		});
	// 	}

	// },

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

	onCaptionSubmit: function(e){
		// debugger
		e.preventDefault()
		// var target_value = e.target.value
		// console.log('caption america');
		// console.log(target_value);
		// debugger

		// var captionVal = this.refs.caption.value
		// var captionVal = caption
		var captionVal = this.refs.child.caption.value

		console.log(captionVal);
		console.log('captionVal pressed');
		// debugger

		if (captionVal.length > 0) {
				this.setState({
					caption: captionVal
				});
			};

		console.log("New Caption state: " + this.state.caption);
		// debugger
	},

	// onChildChange: function(caption, childValue){
	onChildChange: function(caption, childValue){
		// debugger
    	let newCaption = {};
    	newCaption["caption"] = childValue;

		console.log("newCaption: " + newCaption)     	

    	this.setState(newCaption);


    },



	render: function() {
		// console.log(this.state.name);
		console.log(this.state.img);
		var caption = this.state.caption; 

		return (

			<div>

				<div>
					<GiphyForm />
				</div>

				<div>
					<h3>Find a Gif</h3>
					<form onSubmit={this.onImageSearch}>
						<input type="text" ref="search_image"/>
						<button>Giphy</button>
					</form>
					<br/>
					<img src={this.state.img} height="300" width="450"/>
				</div>
	
				<AddCaption onFormChange={this.onChildChange} caption={caption}/>
			
			</div>

		)

	}

});

module.exports = Main;


// <AddCaption onCaptionSubmit={this.onChildChange} caption={caption}/>