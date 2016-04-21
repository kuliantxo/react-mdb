import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';

window.React = React;

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);

var CommentBox = React.createClass({
  onMagicClick: function(event) {
  event.preventDefault();
console.log(event);
console.log(event.target.getAttribute('data-value'));
  },
  render: function() {
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="{this.props.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {this.props.name}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="{this.props.id}" onClick={this.onMagicClick}>
          <li><a href data-value="sf">San Francisco</a></li>
          <li>South San Francisco</li>
          <li>San Mateo</li>
          <li>Mountain View</li>
          <li>San Jose</li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox id="departure" name="Departure" />,
  document.getElementById('departureDropdown')
);

ReactDOM.render(
  <CommentBox id="arrival" name="Arrival" />,
  document.getElementById('arrivalDropdown')
);
