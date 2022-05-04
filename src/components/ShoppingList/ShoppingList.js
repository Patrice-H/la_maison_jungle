import React from "react";
import { plantList } from "../../datas/plantList";
import PlantItem from "../PlantItem/PlantItem";
import './ShoppingList.css';

const ShoppingList = () => {
    const plantCategories = Array.from(new Set(plantList.map(plant => plant.category)));

    return (
        <div className="shopping-list">
            <ul>
                {plantCategories.map((plantCategory) => (
                    <li key={plantCategory}>{ plantCategory }</li>
                ))}
            </ul>

            <div className='plant-list'>
                {plantList.map((plant) => (
                    <div key={ plant.id } className='plant-item'>
                        <PlantItem 
                            name={ plant.name } 
                            cover={ plant.cover} 
                            light={ plant.light} 
                            water={ plant.water } 
                            price={ plant.price }
                            bestSale={ plant.isBestSale } 
                            specialOffer={ plant.isSpecialOffer }
                         />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;