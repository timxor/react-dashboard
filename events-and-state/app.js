var React = require('react');

var alertNotification = () => {
	alert('Why hello there');
};

var App = React.createClass({
	render() {
		return (
			<div>
				<button onClick={alertNotification}>Enter</button>
			</div>
		);
	}
});

React.render(<App/>, document.body);



