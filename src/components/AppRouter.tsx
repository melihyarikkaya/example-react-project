import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components
import Home from './Home';
import Loading from '../containers/LoadingContainer';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/loading">Loading</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/loading" component={Loading} />
        </div>
      </Router>
    );
  }
}
