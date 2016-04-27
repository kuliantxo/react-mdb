import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React MDB {version}</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
            <li><Link to="/movies"><i className="fa fa-film" aria-hidden="true"></i> Movies</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/poweredby">Powered by</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    <section className="container">
      { children }
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
