var React = require('react');
var MovieContainer = require('./MovieContainer.js')
var MapContainer = React.createClass({

  handleclick: function()
  {

  },
  render: function(){
    var movieComponents = this.props.MovieData.map(function(movie){
      return (
                <MovieContainer
                    allData={movie}
                    key={movie.imdbID}
                  >
                </MovieContainer>
            );
        }.bind(this));
      return(
    <div className="moiveList">
    {movieComponents}
    </div>
  );
  }
});
module.exports=MapContainer;