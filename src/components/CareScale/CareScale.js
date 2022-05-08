/* eslint-disable react/prop-types */
import React from "react";
import sun from '../../assets/sun.png';
import water from '../../assets/water.png';
import './CareScale.css';

const handleClick = (type, value) => {
    let care, qty;
    type === 'light' ? care = 'de lumière' : care = "d'arrosage";
    switch (value) {
        case 1:
            qty = 'peu';
            break;
        case 2:
            qty = 'modérément';
            break;
        case 3:
            qty = 'beaucoup';
            break;
    }
    alert('Cette plante requiert ' + qty + ' ' + care);
}

const CareScale = (props) => {
    const range = [1, 2, 3];
    const scaleType = props.careType === 'light' ? 
        <img src={sun} alt='ensoleillement' className='care-logo' /> : 
        <img src={water} alt='arrosage' className='care-logo' />
    ;
    const scaleValue = props.scaleValue;

    return (
        <div onClick={() => handleClick(props.careType, props.scaleValue)}>
            {range.map((rangeElem) =>
               scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{ scaleType }</span> : null 
            )}
        </div>
    );
}

export default CareScale;