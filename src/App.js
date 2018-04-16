import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './App.css';

import Routes from './routes';

export default withRouter(props => {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper blue darken-4">
          <Link to="/" className="brand-logo center">
            Calculator
          </Link>
          <ul>
            <li>
              <button
                href="collapsible.html"
                className={
                  props.location.pathname === '/'
                    ? 'hide'
                    : 'BackButton btn-flat'
                }
                onClick={() => {
                  props.history.goBack();
                }}
              >
                <i className="material-icons">arrow_back</i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Routes />
    </div>
  );
});
