
/* jshint esversion: 6 */

import React from 'react';
export const Cart = (props)=>{
    var jsx = props.item.isAdded?<p>Item in cart</p>:<p>Item not in cart</p>;
    return (
        <>
        <button onClick={()=>{
            console.log("Added to Cart Called...",props.item.isAdded);
            props.item.toggleAdd();
            console.log("Now Status is added");
            props.isAddedFlag( props.item.isAdded);
        }} className='btn btn-primary'><i className="fas fa-cart-plus"></i>Add to Cart</button>
        {jsx}
        </>
    )
}