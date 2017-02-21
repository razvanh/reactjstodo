var React = require('react');

var TodoItem = React.createClass({

	handleDelete: function(){
		this.props.onDelete(this.props.whichItem);
	},

	render: function() {
		return(
			<li>
				<h2>{ this.props.singleItem.title }</h2>
				<p className="small-text">Due on { this.props.singleItem.dueDate}</p>
				<p>{ this.props.singleItem.details }</p>
				<p><button onClick={this.handleDelete} className="button-done">Done</button></p>
			</li>
			)//return
	}//render
});//TodoItem

module.exports=TodoItem;