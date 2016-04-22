import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import App from './components/App';
import Movies from './components/Movies';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import { IndexRoute } from 'react-router'

window.React = React;

const Dashboard = () => (
    <div>Welcome to the app!</div>
);
/*
var Dashboard = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
//      url: 'https://api.themoviedb.org/3/movie/550?api_key=3a3de10833d0c81631b98029f67061a7',
      url: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3a3de10833d0c81631b98029f67061a7',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
//    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentList data={this.state.data} />
      </div>
    );
  }
});
*/
const Movie = React.createClass({
  render() {
    return (
      <div>
        <h2>Movie</h2>
        <Link to="/movie/22">Movie 22</Link>
        {this.props.children || "Welcome to your Movie"}
      </div>
    )
  }
})

const Details = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})


ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/movies" component={Movies} />
      <Route path="/movie" component={Movie}>
        <Route path=":id" component={Details} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);
