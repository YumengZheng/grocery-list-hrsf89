import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  
   (
    <div className="groceries">
    {props.list.map((n)=>
      <GroceryItem item={n} />
    )}
    </div>
  )

)

export default GroceryList;