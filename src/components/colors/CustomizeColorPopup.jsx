import React, { Fragment } from 'react';
import Popover from '@material-ui/core/Popover';
import ColorPicker from './ColorPicker';
import { hex2rgb } from '../../utils';

class SimplePopover extends React.Component {
    state = {
        anchorEl: null,
    };

    static getDerivedStateFromProps(props) {
        return ({
            anchorEl: props.target
        })
    }

    handleClose = () => {
        const { onClose } = this.props;
        onClose()
        this.setState({ anchorEl: null });
    };

    render() {
        const { onSaveColor, hex, randomColor } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const color = hex ? hex2rgb(hex) : null;
        return (
            anchorEl ?
                <Fragment>
                    <Popover
                        id="simple-popper"
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <ColorPicker onClose={this.handleClose} onSave={onSaveColor} color={color} randomColor={randomColor} />
                    </Popover>
                </Fragment>
                : null
        );
    }
}

export default SimplePopover;
