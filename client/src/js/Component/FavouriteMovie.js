var React = require('react');
var ViewMyFavouriteMovie = require('./ViewMyFavouriteMovie.js')
var FavouriteMovie = React.createClass({
 getInitialState: function()
 {
    return {data: []};
 },
 handleviewMovie: function()
 {
console.log("inside fav");
   $.ajax({
    url:"http://localhost:8080/movie/addMovies",
    type: 'GET',
    dataType: 'JSON',
    success: function(message)
    {
         console.log("inside success");
        this.setState({data:Object.values(message)});
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
},
handleUpdate:function(imdbID,Title){
  var movieData=this.state.data;
  var index=movieData.findIndex(function(element){
    return element.imdbID===imdbID;
  });
  if(index!==-1){
    movieData[index].Title=Title;
    this.setState({data:movieData});
  }
},
handleDelete:function(del){
  var movieData=this.state.data;
  var index=movieData.findIndex(function(element){
    return element.imdbID===del.imdbID;
  });
  if(index!==-1){
    movieData.splice(index,1);
    this.setState({data:movieData});
  }
},

componentDidMount:function(){
  this.handleviewMovie();
},

 render: function(){

var viewComponents = this.state.data.map(function(view){
 return (
          <ViewMyFavouriteMovie
               alldata={view}
               key={view.imdbID}
                onupdate={this.handleUpdate}
                ondelete={this.handleDelete}
            >
            </ViewMyFavouriteMovie>
       );
   }.bind(this));

 return(
   <div className="moiveList">
   {viewComponents}
   </div>
 );
 }
});
module.exports=FavouriteMovie;