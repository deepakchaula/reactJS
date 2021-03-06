
/* jshint esversion: 6 */

import React from 'react';
export const SearchSortBar = (props)=>{
    return(
        <div className='row'>
        <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor="">Search</label>
            <input type="text" className='form-control' placeholder='Type to Search by Price' />
        </div>
        </div>
        <div className='col-sm-6'>
        <div className='form-group'>
        <label htmlFor="">Sort</label>
        <select className='form-control'>
            <option value='1'>Select to Sort</option>
            <option value='price'>By Price</option>
            <option value='name'>By Name</option>
        </select>
    </div>
    </div>
    </div>
    )
}