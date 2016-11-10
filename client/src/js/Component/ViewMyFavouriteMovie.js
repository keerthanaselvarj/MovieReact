var React = require('react');
var ViewMyFavouriteMovie = React.createClass({
 
deleteMovie : function()
{
  console.log("deleted");
  alert("movie deleted");
  var del=this.props.alldata.imdbID;
  $.ajax({
   url:"http://localhost:8080/movie/delete/"+del,
   type: 'DELETE',
   success: function(message)
   {
     console.log("MOVIE deleted");
     this.props.ondelete(this.props.alldata);
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
 });
},
updateClick: function()
  {
var Title = prompt("Please enter your");
    if (Title != null) {
       console.log(Title);

    }
      
      var movieObject = {};
      movieObject.Title = Title;
     
      movieObject.imdbID= this.props.alldata.imdbID;

      $.ajax({
       url:"http://localhost:8080/movie/update",
       type: 'PUT',
       data: movieObject,

       success: function(message)
       {
         console.log("Movie updated");
         this.props.onupdate(movieObject.imdbID, movieObject.Title);
       }.bind(this),
       error: function(err)
       {
         console.log(err);
       }.bind(this)
     });
  },

render : function()
{
return (
   <div className="movie">
           <h2 className="movieName"> </h2>
           <div className="well">
               <div className="row">
                   <div className="col-4">
                       <img className="thumbnail" src={this.props.alldata.Poster}/>
                   </div>
                     <div className="col-8">
                         <h4>{this.props.alldata.Title}</h4>
                         <ul className='list-group'>
                             <li className='list-group-item'>Year Released : {this.props.alldata.Year}</li>
                             <li className='list-group-item'>IMDB Id : {this.props.alldata.imdbID}</li>
                         </ul>
                          <button className="btn btn-success" onClick={this.updateClick}>Update</button>

                         <button className="btn btn-success" onClick={this.deleteMovie}>Delete</button>
                     </div>
               </div>
           </div>
       </div>
 );
}
});
module.exports = ViewMyFavouriteMovie;