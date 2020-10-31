import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Campaign from '../pages/Campaign';
import Action from '../pages/Campaign/pages/Action';
import Home from '../pages/Home';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/campaign" exact component={Campaign} />
    <Route path="/campaign/action" exact component={Action} />
    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
