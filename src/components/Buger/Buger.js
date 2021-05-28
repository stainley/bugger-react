import React from 'react';
import classes from './Bugger.module.css';

import BuggerIngredient from "./BugerIngredient/BuggerIngredient";

const buger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <BuggerIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredient</p>
    }

    return (
        <div className={classes.Buger}>
            <BuggerIngredient type="bread-top"/>
            {transformIngredients}
            <BuggerIngredient type="bread-bottom"/>
        </div>
    );
}

export default buger;
