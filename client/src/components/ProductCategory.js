import React from 'react';
import {ProductSubCategory, ProductHeader} from '/'

function ProductCategory(props) {

  const subCategories = props.category.map(subCategory => {
    return (<ProductSubCategory subCategory={subCategory} />)
  })

  return (
    <div className='flex flex-1 flex-col ml-1'>
      <ProductHeader name={props.location.pathname !== '/' ? props.location.pathname.substring(1) : 'Home'} />
      {subCategories}
    </div>
  )
}

export default ProductCategory;