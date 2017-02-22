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
			<li className="flex-container">
				<input type="checkbox" onChange={this.handleComplete} ref="checkbox" />
				<label className="quadruple">{ this.props.singleItem.title }</label>
				
			</li>
			)//return
	}//render
});//TodoItem

module.exports=TodoItem;