var React = require('react');


var WeatherForm = React.createClass ({

    onFormSubmit: function(e) {
        e.preventDefault();

        var city = this.refs.city.value

    },


    render: function () {
        return (

            <div>
                <form>
                    <div>
                        <input type="text" ref="city" placeholder="Enter City" />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

        );
    }
});

module.exports = WeatherForm;