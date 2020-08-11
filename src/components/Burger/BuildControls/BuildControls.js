import React from 'react';
import './BuildControls.css'; 
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Veg', type: 'veg'},
    { label: 'Chicken', type: 'chicken'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Egg', type: 'egg'},   
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className="OrderButton" onClick={props.ordered} disabled={!props.purchaseable}>{ props.isAuth ? 'Order Now': 'SignUp to Order' }</button>
    </div>
);

export default buildControls;