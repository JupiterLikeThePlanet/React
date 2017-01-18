var React = require('react');



var AddCaption = React.createClass({
	// getDefaultProps: function(){
	// 	caption: 'Add a Caption'
	// },

	// getInitialState: function() {
	// 	caption: this.props.caption
	// },

    updateCaption(e) {
      debugger
      e.preventDefault();
      // this.props.onCaptionSubmit(this.refs.caption.value);
    },


	render: function() {
		var caption = this.props.caption;
		var onCaptionSubmit = this.props.onCaptionSubmit;

		return (
			<div>
				<p>{caption}</p>
				<form onSubmit={this.updateCaption}>
					<input type='text' ref='caption'/>
					<button> Make Witty Wit It </button>
				</form>
			</div>
			)
	}
});




module.exports = AddCaption;