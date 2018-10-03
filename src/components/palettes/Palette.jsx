import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { ROUTE_COLORS } from '../../pages/contatns';
import { colors2url } from '../../utils';

const Palette = ({ colors, title }) => {
    const width = colors && colors.length ? 100 / colors.length : null;
    const link = colors && colors.length ? colors2url(colors) : '';
    return (
        colors ?
            <div className="palette">
                <NavLink className="palette-block" to={`${ROUTE_COLORS}/${link}`}>
                    <div className="palette-colors">
                        {colors.map((color, index) => <div className="palette-color" key={index} style={{ backgroundColor: color, width: `${width}%`, left: `${width * index}%` }}></div>)}
                    </div>
                    <Typography variant="subheading">{title}</Typography>
                </NavLink>
            </div>
            :
            null
    );
};

export default Palette;