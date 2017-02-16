var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	render: function(){
		return (
			<h2>Your To Do List</h2>
			)
	}//render function
}); //Main Interface Component

ReactDOM.render(
	<MainInterface />,
	document.getElementById('main')
)