/* eslint-disable react/prop-types */
import React from "react";
import { useState } from 'react'
import { plantList } from "../../datas/plantList";
import Categories from "../Categories/Categories";
import PlantItem from "../PlantItem/PlantItem";
import './ShoppingList.css';

const ShoppingList = (props) => {
    const [activeCategory, setActiveCategory] = useState('---');
    let plantCategories = Array.from(new Set(plantList.map(plant => plant.category)));
    plantCategories.unshift('---');

    return (
        <div className="shopping-list">
            <Categories 
                categories={plantCategories} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory}
            />
            <div className='plant-list'>
                {plantList.map((plant) => (
                    activeCategory === '---' || activeCategory === plant.category ? (
                    <div key={ plant.id } className='plant-item'>
                        <PlantItem 
                            name={ plant.name } 
                            cover={ plant.cover} 
                            light={ plant.light} 
                            water={ plant.water } 
                            price={ plant.price }
                            bestSale={ plant.isBestSale } 
                            specialOffer={ plant.isSpecialOffer }
                            cart={ props.cart } 
                            updateCart={ props.updateCart }
                         />
                    </div>
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;