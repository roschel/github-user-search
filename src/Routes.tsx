import NavBar from 'core/components/NavBar/index';

import Home from 'pages/Home';
import UserSearch from 'pages/UserSearch';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <UserSearch />
            </Route>
        </Switch>

    </BrowserRouter>
);

export default Routes;