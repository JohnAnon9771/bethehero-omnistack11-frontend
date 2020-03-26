import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/register" component />
    </Switch>
  );
}
