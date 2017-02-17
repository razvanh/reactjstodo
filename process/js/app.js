var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	getInitialState: function (){
		return {
			data: [
			{
				"title": "Create To Do App using React.js",
				"dueDate": "2017-03-10 08:00",
				"details": "Implement simple To Do list functionality using React.js"
			},
			{
				"title": "Work on the design of the To Do app",
				"dueDate": "2015-04-10 08:00",
				"details": "Make it beautiful:)"
			},
			]
		}
	},//getInitialState

	render: function(){
		var todos = this.state.data;
		todos = todos.map(function(item,index){
			return (
					<li key={index}>
						<h2>{ this.state.data[index].title }</h2>
						<p className="small-text">Due on { this.state.data[index].dueDate}</p>
						<p>{ this.state.data[index].details }</p>
					</li>
				)//return
		}.bind(this)); //todos.map
		return (
			<ul className="todo-list">
				{ todos }
			</ul>
			)
	}//render function
}); //Main Interface Component

ReactDOM.render(
	<MainInterface />,
	document.getElementById('main')
)