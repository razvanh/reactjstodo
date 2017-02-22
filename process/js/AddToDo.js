var React = require('react');

var AddToDo = React.createClass({

	toggleFormDisplay: function(){
		$( "form" ).fadeToggle("slow");
	},

	handleSubmit: function(e){
		var tempTodo = {
			title: this.refs.inputTodoTitle.value,
			dueDate: this.refs.inputDueDate.value,
			details: this.refs.inputTodoDetails.value
		}//tempTodo
		e.preventDefault();
		this.props.addTodoItem(tempTodo);

		this.refs.inputTodoTitle.value = '';
		this.refs.inputDueDate.value = '';
		this.refs.inputTodoDetails.value = '';
	},//handleSubmit

	render: function(){

		var displayAddToDoForm = {
			display: this.props.formVisible ? 'block':'none'
		};

		return(
			<div>
				<a onClick={ this.toggleFormDisplay } className="button button-large">
					Add new To Do
				</a>
				<form style= {displayAddToDoForm} onSubmit ={ this.handleSubmit }>
					<p>
						<label htmlFor="todoTitle">What needs to be done:</label>
						<input type="text" id="todoTitle" ref="inputTodoTitle"/>
					</p>
					<p>
						<label htmlFor="todoDate">Due date</label>
						<input type="text" id="todoDate" ref="inputDueDate"/>
					</p>

					<p>
					<label htmlFor="todoDetails">Details</label>
					<textarea name="todoDetails" id="todoDetails" ref="inputTodoDetails" cols="30" rows="10"></textarea>
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