import React from "react";

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctr => (
            <BuildControl
                key={ctr.label}
                label={ctr.label}
                added={() => props.ingredientAdded(ctr.type)}
                delete={() => props.ingredientDelete(ctr.type)}
                disabled={props.disabled[ctr.type]}
            />
        ))}
        <button
            className={styles.OrderButton}
            disabled={!props.puchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;
