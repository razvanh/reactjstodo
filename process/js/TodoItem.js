var React = require('react');

var TodoItem = React.createClass({

	handleDelete: function(){
		this.props.onDelete(this.props.whichItem);
	},
	handleComplete:function(){
		var that = this;
		setTimeout(function() {
			that.props.onComplete(that.props.whichItem);
		}, 100);//added slight delay so you can see that you are selecting the checkbox
		
	},

	render: function() {
		return(
			<li className="flex-container" >
				<input type="checkbox" onChange={this.handleComplete} ref="checkbox" />
				<label className="quadruple">{ this.props.singleItem.title }</label>
				
			</li>
			)//return
	}//render
});//TodoItem

module.exports=TodoItem;