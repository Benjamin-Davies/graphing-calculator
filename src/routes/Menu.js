import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default () => {
  return (
    <main className="Menu">
      <MenuItem title="Run&#x2022;Mat" path="/RunMat" />
    </main>
  );
};

const MenuItem = props => {
  return (
    <Link className="MenuItem" to={props.path}>
      <div className="card">
        <h4 className="center black-text">{props.title}</h4>
      </div>
    </Link>
  );
};
