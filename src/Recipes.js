import React from 'react';
import style from './recipe.module.css';
const Recipes = ({title,calories,image,ingredients})=> {         //deconstruct props
    return (
        <div className={style.recipes}>
            <h1 className={style.tit}>{title}</h1>
            <ol>
                <li>ingredients</li>
                {
                    ingredients.map(ingredient =>(
                        
                    <li>{ingredient.text}</li>
    ))
                }
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipes;
