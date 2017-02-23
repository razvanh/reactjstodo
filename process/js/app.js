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
		if (localStorage.getItem("razvanToDo") === null) {
			localStorage.setItem("razvanToDo", JSON.stringify([]));
		}

		if (localStorage.getItem("razvanToDoDone") === null) {
			localStorage.setItem("razvanToDoDone", JSON.stringify([]));
		}

		var toDos =  JSON.parse(localStorage.getItem("razvanToDo"));
		var done =  JSON.parse(localStorage.getItem("razvanToDoDone"));
		this.setState({
				myToDos: toDos,
				completedToDos : done
			});//setState
	},//componentDidMount

	componentWillUnmount: function(){
		this.serverRequest.abort();
	},//componentWillMount

	deleteTodo: function(item){
		var allToDos = this.state.myToDos;
		var newToDos = _.without(allToDos,item);
		localStorage.setItem("razvanToDo", JSON.stringify(newToDos));
		this.setState({
			myToDos : newToDos
		});//setState
	},//deleteTodo

	addTodo: function(item){
		var tempTodos = this.state.myToDos;
		tempTodos.unshift(item);
		localStorage.setItem("razvanToDo", JSON.stringify(tempTodos));
		this.setState({
			myToDos: tempTodos
		});//setState
	},//addTodo

	completeTodo: function(item){
		var tempTodos = this.state.completedToDos;
		tempTodos.unshift(item);
		localStorage.setItem("razvanToDoDone", JSON.stringify(tempTodos));
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