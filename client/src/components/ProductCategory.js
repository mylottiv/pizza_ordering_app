import React from 'react';
import {ProductSubCategory, ProductHeader} from '/'

function ProductCategory(props) {

  console.log(props);

  return (
    <div className='flex flex-1 flex-col ml-1'>
      <ProductHeader name={props.location.pathname !== '/' ? props.location.pathname.substring(1) : 'Home'} />
      <ProductSubCategory name='Build your own!' size={1}/>
      <ProductSubCategory name='Specialty' size={2}/>
    </div>
  )
}

export default ProductCategory;