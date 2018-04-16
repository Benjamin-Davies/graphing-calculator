import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RunMat from './RunMat';
import Menu from './Menu';

export default () => {
  return (
    <Switch>
      <Route path="/RunMat" component={RunMat} />
      <Route path="/" component={Menu} />
    </Switch>
  );
};
