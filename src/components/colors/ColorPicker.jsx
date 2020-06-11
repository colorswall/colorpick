import React, { PureComponent } from 'react'
import { CustomPicker } from 'react-color'
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common'
import Button from '@material-ui/core/Button';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import IconButton from '@material-ui/core/IconButton';
import appStyles from '../../styles';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const stylesMaterial = theme => ({
    lightTooltip: appStyles(theme).lightTooltip
});

class MyPicker extends PureComponent {

    handleSave = () => {
        const { hex, onSave, onClose } = this.props;
        onSave(hex.substring(1));
        onClose();
    }

    render() {
        const { hex, hsl, randomColor, classes, onChange } = this.props;
        const styles = {
            hue: {
                height: 30,
                position: 'relative',
                marginBottom: 10,
            },
            input: {
                height: 34,
                border: '1px solid  #ccc',
                paddingLeft: 10,
                margin: '6px 0 0 0'
            },
            swatch: {
                width: 54,
                height: 34,
                background: hex,
                margin: '6px 12px 0 0',
                border: '1px solid  #ccc',
                borderLeftColor: 'transparent'
            },
        }

        return (
            <div className="color-picker">
                <div className="color-picker-content">
                    <div className="color-picker-saturation">
                        <Saturation {...this.props} onChange={onChange} />
                    </div>
                    <div style={styles.hue}>
                        <Hue hsl={hsl} onChange={onChange} />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <EditableInput
                            style={{ input: styles.input }}
                            value={hex}
                            onChange={onChange}
                        />
                        <div style={styles.swatch} />
                        <div>
                            <Tooltip title="Random color" classes={{ tooltip: classes.lightTooltip }} placement="top">
                                <IconButton size="small" onClick={randomColor} >
                                    <ShuffleIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="color-picker-footer">
                    <div >
                        <Button size="small" onClick={this.props.onClose}>
                            Cancel
                        </Button>
                    </div>
                    <div className="right">
                        <Button size="small" variant="contained" color="primary" onClick={this.handleSave} >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(stylesMaterial)(CustomPicker(MyPicker))