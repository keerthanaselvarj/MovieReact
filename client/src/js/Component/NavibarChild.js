var React = require('react');

var {Link} = require('react-router');

var NavibarChild = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
      <ul className ="nav navbar-nav">
      <li><Link to ="/HomeChild">Home</Link></li>
      <li><Link to ="/AboutUsChild">AboutUs</Link></li>
      <li><Link to ="/ContactUsChild">ContactUs</Link></li>
      <li><Link to ="/FavouriteMovie">Favourites</Link></li>
      </ul>
      </div>
    )
  }
});
module.exports = NavibarChild;
