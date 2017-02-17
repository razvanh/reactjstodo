var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	getInitialState: function (){
		return {
			myToDos: []
		}//return
	},//getInitialState

	componentDidMount: function(){
		this.serverRequest =  $.get('./js/data.json', function(result){
			console.log('test');
			var tempToDos = result;
			this.setState({
				myToDos: tempToDos
			});//setState
		}.bind(this));//serverRequest
	},

	componentWillUnmount: function(){
		this.serverRequest.abort();
	},
	render: function(){
		var todos = this.state.myToDos;
		todos = todos.map(function(item,index){
			return (
					<li key={index}>
						<h2>{ this.state.myToDos[index].title }</h2>
						<p className="small-text">Due on { this.state.myToDos[index].dueDate}</p>
						<p>{ this.state.myToDos[index].details }</p>
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