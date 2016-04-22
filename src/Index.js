import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import { IndexRoute } from 'react-router'

window.React = React;

var Comment = React.createClass({
  render: function() {
    return (
      <div className="well">
        <h3>
          {this.props.author}
        </h3>
        <img src={this.props.poster} width="60" />
        <div>{this.props.children}</div>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.title} poster={"http://image.tmdb.org/t/p/w500"+comment.poster_path} key={comment.id}>
          {comment.overview}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

//const Dashboard = () => (
//    <div>Welcome to the app!</div>
//);
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


const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <Link to="/inbox/messages/22">Message 22</Link>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})


ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
    </Route>
  </Router>), document.getElementById('content')
);
