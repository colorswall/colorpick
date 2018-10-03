import React from 'react';
import Palette from './Palette';
import Typography from '@material-ui/core/Typography';

const PalettesList = ({ items }) => {
    return (
        <div className="palettes-list">
            <Typography variant="title">
                Material UI Color palettes
            </Typography>
            <div className="palettes-row">
                {items.map((palette, index) => {
                    return <Palette key={palette.name} title={palette.title} colors={palette.colors} />
                })}
            </div>
        </div>
    );
};

export default PalettesList;