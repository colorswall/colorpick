import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import { ROUTE_COLORS_PARAM, ROUTE_COLORS, ROUTE_HOW_TO, ROUTE_NOT_FOUND, ROUTE_HOME } from './contatns';
import HowTo from './howTo/HowTo';
import NoMatch from './noMatch/NoMatch';
import { colors2url, generateColors, getRandomArbitrary } from '../utils';

const Routes = () => {
    const count = getRandomArbitrary(3, 7);
    const homeUrl = `${ROUTE_COLORS}/${colors2url(generateColors(count))}`;
    return (
        <Switch>
            <Route exact path={ROUTE_COLORS_PARAM} render={
                (props) => <Home {...props} />} />
            <Route exact path={ROUTE_HOW_TO} render={
                (props) => <HowTo {...props} />} />
            <Route path={ROUTE_NOT_FOUND} render={
                (props) => <NoMatch {...props} />} />

            <Redirect exact from={ROUTE_HOME} to={homeUrl} />
            <Redirect from='*' to={ROUTE_NOT_FOUND} />
        </Switch>
    );
};

export default Routes;