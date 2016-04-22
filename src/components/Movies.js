import React from 'react';
import { Link } from 'react-router';

var Comment = React.createClass({
  render: function() {
    return (
      <div className="well">
        <h3>
          {this.props.author}
        </h3>
        <Link to={`/movie/${ this.props.id }`}>Details { this.props.id }</Link>
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
        <Comment author={comment.title} poster={"http://image.tmdb.org/t/p/w500"+comment.poster_path} id={comment.id}>
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

var Movies = React.createClass({
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

export default Movies;
