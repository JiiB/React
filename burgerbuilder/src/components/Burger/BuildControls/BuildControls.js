import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildContols = (props) => {

  return (
    <div className={classes.BuildControls}>
        {controls.map(control => {
           return <BuildControl 
           added={() => props.ingredientAdded(control.type)} 
           removed={() => props.ingredientRemoved(control.type)} 
           key={control.label} 
           label={control.label}
           disabled={props.disabled[control.type]}
           />
        })}
    </div>
  );
}

export default buildContols;
