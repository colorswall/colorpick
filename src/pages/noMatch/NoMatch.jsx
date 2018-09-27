import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { ROUTE_HOME } from '../contatns';

class NoMacth extends Component {
    render() {
        return (
            <div className="contnet">
                <div className="mb-3">
                    <Typography variant="title">
                        404, page not found.
                </Typography>
                </div>
                <div className="text-center">
                    <Button component={NavLink} to={ROUTE_HOME} variant="contained" color="primary">
                        Home page
                    </Button>
                </div>
            </div>
        );
    }
}

export default NoMacth;