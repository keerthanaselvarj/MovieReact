var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route ,Router,IndexRoute} = require('react-router');
var NavibarChild = require('./Component/NavibarChild.js');
var AboutUsChild = require('./Component/ContactUsChild.js');
var ContactUsChild = require('./Component/AboutUsChild.js');
var HomeChild = require('./Component/HomeChild.js');
var FavouriteMovie = require('./Component/FavouriteMovie.js');

var NewMain = require('./Component/NewMain.js');


var MainComponent = React.createClass({

  render: function(){
    return (
      <div>
       
        <NavibarChild />

        {this.props.children}
       <NewMain/>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history ={browserHistory}>
    <Route path = "/" component={MainComponent} >
    <Route path = "/HomeChild" component={HomeChild} />
    <Route path = "/AboutUsChild" component={AboutUsChild} />
    <Route path = "/ContactUsChild" component={ContactUsChild} />
     <Route path = "/FavouriteMovie" component={FavouriteMovie} />
    </Route>
  </Router>,document.getElementById('app'));
