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
				
				<form onSubmit ={ this.handleSubmit } className="add-todo flex-container">
					<p className="quadruple">
						<input type="text" id="todoTitle" ref="inputTodoTitle" placeholder="Add New Item"/>
					</p>
					<p>
						<button type="submit" className="full-width">Add</button>
					</p>
				</form>
			</div>	
			)//return
	}//render
});//AddToDo

module.exports = AddToDo;