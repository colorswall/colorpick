import React from 'react';
import Close from '@material-ui/icons/Close';
import Settings from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import { isDarkColor, hex2rgb } from '../../utils';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() =>
    <Tooltip title="Drag" placement="bottom">
        <IconButton size="small">
            <DragIndicatorIcon />
        </IconButton>
    </Tooltip>);

const Color = ({ hex, onRemove, active, index, onClickPopup }) => {
    const classColor = isDarkColor(hex2rgb('#' + hex)) ? ' color-dark' : ' color-light';
    return (
        <div className={"color1" + (active ? ' selected' : '') + classColor}>
            <div className="controls">
                <DragHandle />
                <Tooltip title="Customize" placement="bottom">
                    <IconButton size="small" onClick={e => onClickPopup(e.currentTarget, index)}>
                        <Settings />
                    </IconButton >
                </Tooltip>
                <Tooltip title="Remove" placement="bottom">
                    <IconButton size="small" onClick={onRemove.bind(null, index)}>
                        <Close />
                    </IconButton >
                </Tooltip>
            </div>
            <Typography className="hex" color="inherit" variant="subheading">#{hex}</Typography>
        </div >
    );
};

export default (Color);