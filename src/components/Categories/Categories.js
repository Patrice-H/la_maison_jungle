/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react';
import './Categories.css';

const Categories = (props) => {
    const categories = props.categories;
    const activeCategory = props.activeCategory;
    const setActiveCategory = props.setActiveCategory;

    return (
        <div className='categories'>
            <label htmlFor='categories-filter'>Filtrer par : </label>
            <select 
                id='categories-filter' 
                name='plants-categories' 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                {categories.map(category => (
                    <option key={category} value={category}>{ category }</option>
                ))}
            </select>
        </div>
        
    );
    
}

export default Categories;