import React from 'react';
import { Link } from 'react-router';

var Detail = React.createClass({
  render: function() {
    return (
      <div className="well">
        <h3>
          {this.props.data.title}
        </h3>
        <img src={`http://image.tmdb.org/t/p/w300${ this.props.data.poster_path }`} />
        <div>{ this.props.data.overview }</div>
      </div>
    );
  }
});

var Movie = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=3a3de10833d0c81631b98029f67061a7`,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
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
  },
  render: function() {
    return (
      <div>
        <Detail data={ this.state.data } />
      </div>
    );
  }
});

export default Movie;
