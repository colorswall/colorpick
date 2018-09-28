import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavLink } from 'react-router-dom';
import { ROUTE_HOME } from '../../pages/contatns';
import { APP_VERSION } from '../../constants';
import Share from './Share';

const styles = {
    root: {
        flexGrow: 1,
    },
    toolbarTitle: {
        flex: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends PureComponent {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" color="default">
                    <Toolbar>
                        <div className={classes.toolbarTitle}>
                            <Typography component={NavLink} to={ROUTE_HOME} className={'logo'} variant="title" color="inherit" noWrap>
                                ColorPick
                            <small>{APP_VERSION}</small>
                            </Typography>
                            <a href="https://colorswall.com" className="logo-by">by ColorsWall</a>
                        </div>
                        <div>
                            <div className="github-button-wrapper">
                                <a className="github-button" href="https://github.com/colorswall/colorpick" data-show-count="true" aria-label="Star colorswall/colorpick on GitHub">Star</a>
                            </div>
                            <Share />
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
