var React = require('react');

var AddToDo = React.createClass({

		toggleFormDisplay: function(){
			this.props.handleFormDisplay();
		},


	render: function(){

		var displayAddToDoForm = {
			display: this.props.formVisible ? 'block':'none'
		};

		return(
			<div>
				<p onClick={ this.toggleFormDisplay }>
					Add new To Do
				</p>
				<form style= {displayAddToDoForm} >
					<p>
						<label for="todoTitle">What needs to be done:</label>
						<input type="text" id="todoTitle" ref="inputTodoTitle"/>
					</p>
					<p>
						<label for="todoDate">Due date</label>
						<input type="text" id="todoDate" ref="inputDueDate"/>
					</p>

					<p>
					<label for="todoDetails">Details</label>
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