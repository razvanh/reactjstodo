var React = require('react');

var AddToDo = React.createClass({

	handleSubmit: function(e){
		var tempTodo = {
			title: this.refs.inputTodoTitle.value,
			id: Date.now()
		}//tempTodo
		e.preventDefault();
		this.props.addTodoItem(tempTodo);

		this.refs.inputTodoTitle.value = '';

	},//handleSubmit

	render: function(){

		return(
			<div>
				
				<form onSubmit ={ this.handleSubmit }>
					<p>
						<label htmlFor="todoTitle">What needs to be done:</label>
						<input type="text" id="todoTitle" ref="inputTodoTitle"/>
					</p>
					<p>
						<button type="submit">Add</button>
					</p>
				</form>
			</div>	
			)//return
	}//render
});//AddToDo

module.exports = AddToDo;