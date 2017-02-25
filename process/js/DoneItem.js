var React = require('react');

var DoneItem = React.createClass ({
	render: function(){
		return(
				<li>{ this.props.singleItem.title }</li>
			)
	}
});//DoneItem 
	

module.exports=DoneItem;