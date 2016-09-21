var React = require('React');


var ErrorModal = React.createClass({

    componentDidMount: function () {
        var modal = new Foundation.Reveal($("#error-modal"));
        console.log('component did mount')
        modal.open();
    },

    render: function() {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>No can do!</h4>

                <p>It seems we cannot find what you are looking for</p>

                <p>
                    <button className="button hollow" data-close="">
                        close
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;