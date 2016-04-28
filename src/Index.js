import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import App from './components/App';
import Movies from './components/Movies';
import Movie from './components/Movie';
import PoweredBy from './components/Powered-by';
import About from './components/About';

window.React = React;

const Dashboard = () => (
    <div>Welcome to React MDB!</div>
);

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/movies" component={Movies} myprop="mamamia" />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);
