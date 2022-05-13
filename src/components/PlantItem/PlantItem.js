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
import buttonImg from '../../assets/button.png';
import './PlantItem.css'
import AdvertisingInsert from "../AdvertisingInsert/AdvertisingInsert";

const PlantItem = (props) => {
    const name = props.name;
    const cover = props.cover;
    const light = props.light;
    const water = props.water;
    const price = props.price;
    const bestSale = props.bestSale;
    const specialOffer = props.specialOffer;
    const cart = props.cart;
    const updateCart = props.updateCart;
    let imgSrc = '';

    switch (cover) {
        case 'basilique.jpg':
            imgSrc = basiliqueImg;
            break;
        case 'cactus.jpg':
            imgSrc = cactusImg;
            break;
        case 'calathea.jpg':
            imgSrc = calatheaImg;
            break;
        case 'ficus-lyrata.jpg':
            imgSrc = ficusLyrataImg;
            break;
        case 'menthe.jpg':
            imgSrc = mentheImg;
            break;
        case 'monstera.jpg':
            imgSrc = monsteraImg;
            break;
        case 'olivier.jpg':
            imgSrc = olivierImg;
            break;
        case 'pothos-argente.jpg':
            imgSrc = pothosArgenteImg;
            break;
        case 'succulente.jpg':
            imgSrc = succulenteImg;
            break;
        default:
            break;
    }

    const addToCart = (name, price) => {
        if (confirm(`Voulez vous ajouter 1 ${name} au panier ?`)) {
            const currentPlantAdded = cart.find((plant) => plant.name === name);
            if (currentPlantAdded) {
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                );
                updateCart([
                    ...cartFilteredCurrentPlant,
                    {name, price, amount: currentPlantAdded.amount + 1}
                ]);
            } else {
                updateCart([...cart, {name, price, amount: 1}]);
            }
        }
    }

    return (
        <>
            <img src={imgSrc} alt={name} className='plant-item-img' />
            <div>{name}</div>
            <CareScale careType='light' scaleValue={light} />
            <CareScale careType='water' scaleValue={water} />
            <span className='plant-item-price'>{price}€</span>
            {bestSale ? <AdvertisingInsert insertType='best-sale' /> : null}
            {specialOffer ? <AdvertisingInsert insertType='special-offer' /> : null}
            <button 
                className='plant-item-btn' 
                style={{ 
                    backgroundImage: `url(${buttonImg})`,
                    backgroundSize: '100%',
                }}
                onClick={() => addToCart(name, price)}
            >
                Ajouter
            </button>
        </>
    );
}

export default PlantItem;