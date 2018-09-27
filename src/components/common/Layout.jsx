import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';

const drawerWidth = 240;

const styles = theme => {
    return ({
        root: {
            zIndex: 1,
            position: 'relative',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawerPaper: {
            position: 'relative',
            width: drawerWidth,
        },
        content: {
            width: '100%',
            position: 'absolute',
            overflow: 'hidden',
            margin: `${theme.mixins.toolbar.minHeight}px 0 0`,
            height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
            [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                margin: `${theme.mixins.toolbar[`${theme.breakpoints.up('xs')} and (orientation: landscape)`].minHeight}px 0 0`,
                height: `calc(100vh - ${theme.mixins.toolbar[`${theme.breakpoints.up('xs')} and (orientation: landscape)`].minHeight}px)`,
            },
            [theme.breakpoints.up('sm')]: {
                margin: `${theme.mixins.toolbar[`${theme.breakpoints.up('sm')}`].minHeight}px 0 0`,
                height: `calc(100vh - ${theme.mixins.toolbar[`${theme.breakpoints.up('sm')}`].minHeight}px)`,
            },
        }
    })
};

const Layout = (props) => {
    const { classes, children } = props;
    return (
        <Fragment>
            <Header />
            <div className={classes.root}>
                <main className={classes.content}>
                    {children}
                </main>
            </div>
        </Fragment>
    );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);