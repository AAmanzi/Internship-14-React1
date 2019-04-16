import React from 'react';
import "./GroceryItem.css"

const GroceryItem = (props) => {
  const handleChange = () => {
    props.onChange(props.label)
  }
  return <li className={props.className}>
    <span className="AddItemButton" onClick={handleChange.bind(this)}>
      +
    </span>
    <div>
      {props.label}
    </div>
  </li>
}

export default GroceryItem;