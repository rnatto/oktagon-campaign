import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Campaign from '../pages/Campaign';
import EditCampaign from '../pages/Campaign/components/EditCampaign';
import FormCampaign from '../pages/Campaign/components/FormCampaign';
import Action from '../pages/Campaign/pages/Action';
import Home from '../pages/Home';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/campaign" exact component={Campaign} />
    <Route path="/campaign/new" exact component={FormCampaign} />
    <Route path="/campaign/action" exact component={Action} />
    <Route path="/campaign/:id" exact component={EditCampaign} />
    <Route path="/action/:id" exact component={Action} />
    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
