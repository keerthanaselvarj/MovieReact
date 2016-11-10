var React= require('react');
var Childone=require('./Childone');
var MapContainer=require('./MapContainer');

var NewMain = React.createClass({

 getInitialState: function()
 {
   return {data : []};
 },
getRetrieveData: function(title){
  console.log(title);
  $.ajax({
   url:"http://www.omdbapi.com/?s="+title,
   type: 'GET',
   dataType: 'JSON',
   
   success: function(data)
   {
this.setState({data:data.Search});
console.log(JSON.stringify(data.Search));
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
 });
},

	render: function()
	{
		return(
			<div>
              
                  <Childone clickFordata= {this.getRetrieveData }/>
                  <MapContainer MovieData ={this.state.data}/>
             
            </div>


		)
	}
});
module.exports = NewMain;












