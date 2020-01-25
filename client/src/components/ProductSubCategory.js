import React from 'react';
import {ProductListing} from '/';

function ProductSubCategory(props) {

    const listings = [];
    for (let i = 0; i < props.size; i++) {
      listings.push(<ProductListing name={props.size % 2 === 0 ? 'BBQ' : 'BYOP'} />);
    }
  
    return (
      <div className='flex flex-row bg-red-700 my-1'>
        <div className='flex flex-col w-full'>  
          <div className='flex flex-row'>
            <h1 className='flex-1 text-3xl font-bold text-center'>{props.name}</h1>
          </div>
          <div className='flex flex-row'>
            {listings}
          </div>
        </div>
      </div>
    )
  }

export default ProductSubCategory;