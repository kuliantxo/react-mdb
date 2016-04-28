import React from 'react';
import { Link } from 'react-router';

var Movie = React.createClass({
  render: function() {
    let genres = this.props.genres;
    var movieGenres = this.props.data.genre_ids.map(function(id) {
      return (
        <li>{genres[id]}</li>
      );
    });
    return (
      <div className="col-sm-6">
        <div className="media">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={`http://image.tmdb.org/t/p/w185${ this.props.data.poster_path }`} />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <Link to={`/movie/${ this.props.data.id }`}>{this.props.data.title}</Link>
            </h4>
            {this.props.data.overview}
            <div><i className="fa fa-star" aria-hidden="true"></i> {this.props.data.vote_average}</div>
            <ul>
              {movieGenres}
            </ul>
            <div>
              <Link to={`/movie/${ this.props.data.id }`}>More Info</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var MovieList = React.createClass({
  render: function() {
    let genres = this.props.genres;
    var movieNodes = this.props.data.map(function(movie) {
      return (
        <Movie data={movie} genres={genres} />
      );
    });
    return (
      <div className="row">
        {movieNodes}
      </div>
    );
  }
});

var Movies = React.createClass({
  loadCommentsFromServer: function() {
console.log(this.props);
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
    $.ajax({
      url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=3a3de10833d0c81631b98029f67061a7',
      dataType: 'json',
      cache: false,
      success: function(data) {
          let genres = {};
          data.genres.forEach(function(entry) {
            genres[entry.id] = entry.name;
          });
        this.setState({genres: genres});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: [], genres: {}};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
//    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="movie-list">
        <MovieList data={this.state.data} genres={this.state.genres} />
      </div>
    );
  }
});

export default Movies;
