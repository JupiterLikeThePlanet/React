var React = require('react');



var AddCaption = React.createClass({
	// getDefaultProps: function(){
	// 	caption: 'Add a Caption'
	// },

	// getInitialState: function() {
	// 	caption: this.props.caption
	// },
	// onClick={this.updateCaption}
	onFormChange: function(e) {
        this.props.onFormChange(this.props.caption, e.target.value);
    },

    updateCaption: function(e) {
      // debugger
      e.preventDefault();
      return this.refs.caption.value
      // debugger
      // this.props.onCaptionSubmit(this.refs.caption.value);
    },


	render: function() {
		var caption = this.props.caption;
		var onCaptionSubmit = this.props.onCaptionSubmit;

		return (
			<div>
				<p>{caption}</p>
				<form>
					<input type='text' ref='caption' onChange={this.onFormChange}/>
					
				</form>
			</div>
			)
	}
});




module.exports = AddCaption;


				
// <button> Make Witty Wit It </button>
				
				// <form onSubmit={this.onCaptionSubmit}>
				// 	<input type='text' ref='caption'/>
				// 	<button> Make Witty Wit It </button>
				// </form>