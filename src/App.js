import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import Routes from './routes';

export default () => {
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
                className="BackButton btn-flat"
                onClick={() => window.history.back()}
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
};
