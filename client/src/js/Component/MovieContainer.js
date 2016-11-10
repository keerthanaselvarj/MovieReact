var React = require('react');

var MovieContainer = React.createClass({

 AddMovie: function()
 {
   var movieJSONToSave=this.props.allData;
  $.ajax({
   url:"http://localhost:8080/movie/Moviefolder",
   type: 'POST',
   data:movieJSONToSave,
   success: function(msg)
   {
     alert(msg);
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
          <h2 className="movieName"> Movie Data</h2>
          <div className="well">
              <div className="row">
                  <div className="col-4">
                      <img className="thumbnail" src={this.props.allData.Poster}/>
                  </div>
                    <div className="col-8">
                        <h4>{this.props.allData.Title}</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>Year Released : {this.props.allData.Year}</li>
                            <li className='list-group-item'>IMDB Id : {this.props.allData.imdbID}</li>
                        </ul>
                        <a className="btn btn-primary" href={"http://www.imdb.com/title/"+this.props.allData.imdbID} > View on IMDB </a>

                        <button className="btn btn-success" onClick={this.AddMovie}>Add</button>
                    </div>
              </div>
          </div>
      </div>
);
}

});

module.exports = MovieContainer;