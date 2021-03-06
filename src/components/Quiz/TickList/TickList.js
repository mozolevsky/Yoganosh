import React from 'react';
import PropTypes from 'prop-types';
import './TickList.css';


const TickList = (props) => {
    const {listTitle, listItems} = props;
    const listElements = listItems.map( (item, i) => {
        return (
            <li className="tick-list__item" key={i}>{item}</li>
        )
    });


    return (
        <div className="tick-list">
            <p className="tick-list__title">{listTitle}</p>
            <ul className="tick-list__list">
                {listElements}
            </ul>
        </div>
    );
}

TickList.propTypes = {
    listTitle: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired
};

export default TickList;