import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import appStyles from '../../styles';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'fixed',
        bottom: theme.spacing.unit * 12,
        right: theme.spacing.unit * 6,
        zIndex: 100
    },
    lightTooltip: appStyles(theme).lightTooltip
});

const AddColor = ({ classes, onClickPopup }) => {
    return (
        <Tooltip title="Add color" classes={{ tooltip: classes.lightTooltip }} placement="top">
            <Button variant="fab" color="primary" aria-label="Add" className={classes.absolute} onClick={e => onClickPopup(e.currentTarget)}>
                <AddIcon />
            </Button>
        </Tooltip>
    );
};

export default withStyles(styles)(AddColor);