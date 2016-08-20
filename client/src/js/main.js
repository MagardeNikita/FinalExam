var React=require("react");
var ReactDOM=require("react-dom");
var Weather=require('./Components/Weather.js');
var {Router, Route, browserHistory }=require('react-router');
var About=require('./Components/About');
var ContactUs=require('./Components/ContactUs');
var Database=require('./Components/Database');
var Navbar=require('./Components/ChildComponent1');

var mainComponent = React.createClass({
  render:function()
  {
    return(<div>
      <Navbar/>
      {this.props.children}
      </div>);
  }
})

ReactDOM.render((<Router history={browserHistory}>
  <Route path="/" component={mainComponent}>
    <Route path="/About" component={About}/>
    <Route path="/ContactUs" component={ContactUs}/>
    <Route path="/Weather" component={Weather}/>
    <Route path="/Database" component={Database}/>
  </Route>
  </Router>),document.getElementById('app'));
