import React from 'react';
import {SubCategory, CategoryHeader} from '/'

function Category(props) {

  console.log(props);

  // Homepage View
  if (props.match.path === '/home') {
    return (
      <div className='flex flex-1 flex-col ml-1'>
          <CategoryHeader name='Home' />
          <SubCategory content={{name: 'HOME TEST'}} />
          <SubCategory content={{name: 'HOME TEST'}} />
          <SubCategory content={{name: 'HOME TEST'}} />
          <SubCategory content={{name: 'HOME TEST'}} />
          <SubCategory content={{name: 'HOME TEST'}} />
          <SubCategory content={{name: 'HOME TEST'}} />
      </div>
    )
  }

  // Cart View
  else if (props.match.path === '/myCart') {
    return (      
      <div className='flex flex-1 flex-col ml-1'>
        <CategoryHeader name='My Cart' />
        <SubCategory content={props.content} />
        <SubCategory content={{name: 'CHECKOUT'}} />
      </div>
    )
  }


  // Otherwise populate with relevant subcategories
  const subCategories = props.content.map(subCategory => {
    return (<SubCategory content={subCategory} />)
  })

  return (
    <div className='flex flex-1 flex-col ml-1'>
      <CategoryHeader name={props.location.pathname.substring(1)} />
      {subCategories}
    </div>
  )
}

export default Category;