var React = require('react');


var Childone = React.createClass({
	handleclick: function()
{
	var title=document.getElementById('textfind').value;
	this.props.clickFordata(this.state.title);
},
 handleTitle: function(t)
 {
   this.setState({title: t.target.value});
 },

  render: function()
  {
    return (
      <div>
        
           <input type="text" id="textfind" onChange={this.handleTitle} /> 
           <input type="button" value="click me" onClick={this.handleclick} />        
        </div>
    )
  }
});

module.exports=Childone;