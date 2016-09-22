var React = require('react');



var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div>
                <div>
                    <h1>Main Rendered</h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;