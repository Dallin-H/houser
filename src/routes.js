import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';



export default (
    <div>
        <Switch>
            <Route path="/wizard" component={Wizard} />
            <Route path="/" component={Dashboard} />
        </Switch>
    </div>
);