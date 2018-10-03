import React, { Fragment, PureComponent } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import PalettesList from './PalettesList';
import PaletteIcon from '@material-ui/icons/Palette';
import { PALETTES } from './PalettesData';

class PalettePanel extends PureComponent {
    state = {
        bottom: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {

        return (
            <Fragment>
                <Button onClick={this.toggleDrawer('bottom', true)}>
                    <PaletteIcon />&nbsp;Palettes
                </Button>

                <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('bottom', false)}
                        onKeyDown={this.toggleDrawer('bottom', false)}
                    >
                        <PalettesList items={PALETTES} />
                    </div>
                </Drawer>
            </Fragment>
        );
    }
}

export default PalettePanel;