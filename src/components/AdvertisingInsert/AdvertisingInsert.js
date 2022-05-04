/* eslint-disable react/prop-types */
import React from "react";
import './AdvertisingInsert.css'

const AdvertisingInsert = (props) => {
    const insertType = props.insertType;

    return (
        <>
            {insertType === 'best-sale' ? 
                <span className='best-sale advertising-insert'>Top ventes</span> : 
                <span className='special-offer advertising-insert'>Soldes</span>}
        </>
    );
}

export default AdvertisingInsert;