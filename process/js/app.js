var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var TodoItem = require('./TodoItem');
var AddToDo = require('./AddToDo');

var MainInterface = React.createClass({
	getInitialState: function (){
		return {
			myToDos: [],
			completedToDos: []
		}//return
	},//getInitialState

	componentDidMount: function(){
		this.serverRequest =  $.get('./js/data.json', function(result){
			var tempToDos = result;
			this.setState({
				myToDos: tempToDos
			});//setState
		}.bind(this));//serverRequest
	},//componentDidMount

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

	addTodo: function(item){
		var tempTodos = this.state.myToDos;
		tempTodos.unshift(item);
		this.setState({
			myToDos: tempTodos
		});//setState
	},//addTodo

	completeTodo: function(item){
		var tempTodos = this.state.completedToDos;
		tempTodos.unshift(item);
		this.setState({
			completedToDos: tempTodos
		});//setState
		this.deleteTodo(item);		
	},//completeTodo


	render: function(){
		var todos = this.state.myToDos;
		todos = todos.map(function(item){
			return (
					<TodoItem key = { item.id }
					singleItem = { item } 
					whichItem = { item }
					onDelete = { this.deleteTodo } 
					onComplete = {this.completeTodo}
					/>
				)//return
		}.bind(this)); //todos.map

		return (
			<div>
				<AddToDo 
				addTodoItem = { this.addTodo }
				/>
				<ul className="todo-list">
					{ todos }
				</ul>
			</div>	
			)//return
	}//render function
}); //Main Interface Component


ReactDOM.render(
	<MainInterface />,
	document.getElementById('main')
)