var React = require('react');

var DoneItem = React.createClass ({
	
	handleDelete: function(e) {
		e.preventDefault();
		this.props.onDelete(this.props.singleItem);
	},  
	render: function(){
		return(
				<li><span>{ this.props.singleItem.title }</span> <a href="#" onClick={ this.handleDelete }>delete</a></li>
			)
	}
});//DoneItem 
	

module.exports=DoneItem;