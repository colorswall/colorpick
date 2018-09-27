import React, { Component } from 'react';
import AddColor from './AddColor';
import CustomizeColorPopup from './CustomizeColorPopup';
import { ROUTE_COLORS } from '../../pages/contatns';
import { rgb2hex, getRandomArbitrary } from '../../utils';
import SortableList from './SortableList';
import { arrayMove } from 'react-sortable-hoc';
import PageMeta from '../PageMeta';

const validateColor = (color) => {
    return color && color.length === 6;
}

class Colors extends Component {

    state = {
        orientation: 'horizontal',
        target: null,
        selectedIndex: null,
        selected: null,
        colors: []
    }

    static getDerivedStateFromProps(props) {
        const { match: { params } } = props;
        const colors = params.colors.split(',');
        return {
            colors
        }
    }

    componentDidMount() {
        this.validateUrl();
    }

    validateUrl = () => {
        const { match: { params } } = this.props;
        const colors = params.colors.split(',');
        const validColors = colors.filter(color => validateColor(color));
        if (colors.length !== validColors.length) {
            this.updateUrl(validColors);
        }
    }

    updateUrl = (colors) => {
        const { history } = this.props;
        history.push(`${ROUTE_COLORS}/${colors.join()}`);
    }

    onAddColor = (color) => {
        const { match: { params } } = this.props;
        const { selectedIndex } = this.state;
        const colors = params.colors.split(',');
        if (selectedIndex >= 0) {
            colors[selectedIndex] = color;
        } else {
            colors.push(color);
        }
        this.setState({
            colors
        });
        this.updateUrl(colors);
    }

    onRemove = (index) => {
        const { match: { params } } = this.props;
        const colors = params.colors.split(',');
        colors.splice(index, 1);
        this.setState({
            colors
        });
        this.updateUrl(colors);
    }

    onChangeIndex = (target, index) => {
        const { match: { params } } = this.props;
        const colors = params.colors.split(',');
        this.setState({
            target: target,
            selectedIndex: index,
            selected: `#${colors[index]}`,
        })
    }

    onCloseColorPopup = () => {
        this.setState({
            target: null,
            selectedIndex: null
        })
    }

    randomColor = () => {
        const r = getRandomArbitrary(0, 255);
        const g = getRandomArbitrary(0, 255);
        const b = getRandomArbitrary(0, 255);
        this.setState({
            selected: rgb2hex(r, g, b)
        })
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        const colors = arrayMove(this.state.colors, oldIndex, newIndex);
        this.setState({
            colors: colors
        });
        this.updateUrl(colors);
    };

    render() {
        const { orientation, target, selectedIndex, selected, colors } = this.state;
        return (
            <div className="colors">

                <PageMeta title="ColorPick by ColorsWall" description="ColorPick is a tool to create colors palette" />

                <SortableList
                    items={colors}
                    onSortEnd={this.onSortEnd}
                    transitionDuration={0}
                    axis={"x"}
                    shouldCancelStart={this.shouldCancelStart}
                    onClickPopup={this.onChangeIndex}
                    orientation={orientation}
                    onRemove={this.onRemove}
                    selectedIndex={selectedIndex}
                    useDragHandle={true}
                />

                <AddColor onAddColor={this.onAddColor} onClickPopup={this.onChangeIndex} />

                <CustomizeColorPopup
                    onSaveColor={this.onAddColor}
                    target={target}
                    onClose={this.onCloseColorPopup}
                    randomColor={this.randomColor}
                    hex={selected} />
            </div>
        );
    }
}

export default Colors;