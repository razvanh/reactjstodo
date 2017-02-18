var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var TodoItem = require('./TodoItem');

var MainInterface = React.createClass({
	getInitialState: function (){
		return {
			myToDos: []
		}//return
	},//getInitialState

	componentDidMount: function(){
		this.serverRequest =  $.get('./js/data.json', function(result){
			var tempToDos = result;
			this.setState({
				myToDos: tempToDos
			});//setState
		}.bind(this));//serverRequest
	},

	componentWillUnmount: function(){
		this.serverRequest.abort();
	},//componentWillMount

	deleteTodo: function(item){
		var allToDos = this.state.myToDos;
		var newToDos = _.without(allToDos,item);
		this.setState({
			myToDos : newToDos
		});//setState
	},//deleteTodo

	render: function(){
		var todos = this.state.myToDos;
		todos = todos.map(function(item,index){
			return (
					<TodoItem key = { index }
					singleItem = { item } 
					whichItem = { item }
					onDelete = { this.deleteTodo } />
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