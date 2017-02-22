var React = require('react');

var TodoItem = React.createClass({

	handleDelete: function(){
		this.props.onDelete(this.props.whichItem);
	},
	handleComplete:function(){
		if (this.refs.checkbox.checked) {
			this.props.onComplete(this.props.whichItem);
		}

	},

	render: function() {
		return(
			<li>
				<input type="checkbox" onChange={this.handleComplete} ref="checkbox"/>
				<label>{ this.props.singleItem.title }</label>
				<p><button onClick={this.handleDelete} className="button-done">Done</button></p>
			</li>
			)//return
	}//render
});//TodoItem

module.exports=TodoItem;