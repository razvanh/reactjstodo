var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var TodoItem = require('./TodoItem');
var AddToDo = require('./AddToDo');

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
				todoFormVisible : false,
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
		tempTodos.push(item);
		this.setState({
			myToDos: tempTodos
		});//setState
	},//addTodo


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
			<div>
				<AddToDo 
				formVisible = { this.state.todoFormVisible }
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