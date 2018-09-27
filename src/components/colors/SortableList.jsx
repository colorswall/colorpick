import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Color from './Color';

const SortableItem = SortableElement((props) => {
    return <div className="color" style={{ backgroundColor: `#${props.hex}`, 'width': props.width + '%' }}
    >
        <Color {...props} index={props.id} />
    </div>
});

const SortableList = SortableContainer(({ items, onClickPopup, orientation, onRemove, selectedIndex }) => {
    const width = 100 / items.length;
    return (
        <div>
            {items.map((color, index) =>
                <SortableItem
                    key={`item-${index}`} 
                    index={index}
                    id={index}
                    value={color}
                    onClickPopup={onClickPopup}
                    orientation={orientation}
                    onRemove={onRemove}
                    active={index === selectedIndex}
                    hex={color}
                    width={width}
                    helperClass='drag-item'
                />
            )}
        </div>
    )
});

export default SortableList;