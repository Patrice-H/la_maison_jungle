/* eslint-disable react/prop-types */
import React from "react";
import sun from '../../assets/sun.png';
import water from '../../assets/water.png';
import './CareScale.css';

const CareScale = (props) => {
    const range = [1, 2, 3];
    const scaleType = props.careType === 'light' ? 
        <img src={sun} alt='ensoleillement' className='care-logo' /> : 
        <img src={water} alt='arrosage' className='care-logo' />
    ;
    const scaleValue = props.scaleValue;

    return (
        <div>
            {range.map((rangeElem) =>
               scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{ scaleType }</span> : null 
            )}
        </div>
    );
}

export default CareScale;