/* eslint-disable react/prop-types */
import React from "react";
import CareScale from "../CareScale/CareScale";
import basiliqueImg from '../../assets/basilique.jpg';
import cactusImg from '../../assets/cactus.jpg';
import calatheaImg from '../../assets/calathea.jpg';
import ficusLyrataImg from '../../assets/ficus-lyrata.jpg';
import mentheImg from '../../assets/menthe.jpg';
import monsteraImg from '../../assets/monstera.jpg';
import olivierImg from '../../assets/olivier.jpg';
import pothosArgenteImg from '../../assets/pothos-argente.jpg';
import succulenteImg from '../../assets/succulente.jpg';
import './PlantItem.css'

const PlantItem = (props) => {
    const plantName = props.name;
    const plantCover = props.cover;
    //const plantId = props.id;
    const plantLight = props.light;
    const plantWater = props.water;
    let plantImgSrc = '';

    switch (plantCover) {
        case 'basilique.jpg':
            plantImgSrc = basiliqueImg;
            break;
        case 'cactus.jpg':
            plantImgSrc = cactusImg;
            break;
        case 'calathea.jpg':
            plantImgSrc = calatheaImg;
            break;
        case 'ficus-lyrata.jpg':
            plantImgSrc = ficusLyrataImg;
            break;
        case 'menthe.jpg':
            plantImgSrc = mentheImg;
            break;
        case 'monstera.jpg':
            plantImgSrc = monsteraImg;
            break;
        case 'olivier.jpg':
            plantImgSrc = olivierImg;
            break;
        case 'pothos-argente.jpg':
            plantImgSrc = pothosArgenteImg;
            break;
        case 'succulente.jpg':
            plantImgSrc = succulenteImg;
            break;
        default:
            break;
    }

    return (
        <>
            <img src={plantImgSrc} alt={ plantName } className='plant-item-img' />
            <p>{ plantName }</p>
            <CareScale careType='light' scaleValue={ plantLight } />
            <CareScale careType='water' scaleValue={ plantWater } />
        </>
    );
}

export default PlantItem;