var React = require('react');
var Giphy = require('Giphy');
var GiphyForm = require('GiphyForm');
var AddCaption = require('AddCaption');
var RandomGiphy = require('RandomGiphy');
var RandomGif = require('RandomGif');


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


	handleImageSearch: function(imgVal) {
		var that = this;

		if (imgVal.length > 0) {
			Giphy.getGiphy(imgVal).then(function (url) {
				that.setState({
					img: url
				});
			});
		}

	},

	handleRandomImageSearch: function(e) {
		e.preventDefault();

		var that = this;
		
		RandomGiphy.getRandomGiphy().then(function (url) {
			that.setState({
				img: url
			});
		});
		

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
					<GiphyForm onImageSearch={this.handleImageSearch} img={this.state.img}/>
				</div>

				<div>
					<RandomGif onRandomSearch={this.handleRandomImageSearch}/>
				</div>

	
				<AddCaption onFormChange={this.onChildChange} caption={caption}/>
			
			</div>

		)

	}

});

module.exports = Main;


// <AddCaption onCaptionSubmit={this.onChildChange} caption={caption}/>