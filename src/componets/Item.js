
/* jshint esversion: 6 */

import React from 'react';
import {Cart} from './Cart';
export const Item = (props=>{
    console.log("props is", props);
    return(
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td><img alt="" style={{width:'100px',height:'100px'}} src={props.item.url}/></td>
            <td><Cart isAddedFlag={props.isAddedFlag} item={props.item}/></td>
        </tr>
    )
});