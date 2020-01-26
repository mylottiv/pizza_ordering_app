import React from 'react';
import {ProductListing, SubCategoryHeader, CartItem} from '/';

function SubCategory({content}) {

    console.log(content);

    // If no products returns default paragraph
    // Otherwise populates with either Product Listings or Cart Items
    console.log(content.name)
    const renderContent = (!content.products) 
      ? <p className='text-lg'>Nunc sed tortor sapien. In id lectus vel risus dignissim condimentum at ut sapien. Suspendisse consequat convallis dolor sit amet elementum. Curabitur nec velit non urna faucibus feugiat. Duis finibus dictum dolor ut tempus. Curabitur et lectus tincidunt, tempus justo sit amet, vulputate elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a fringilla mauris. Aenean pretium, metus non suscipit hendrerit, urna est ullamcorper lectus, in hendrerit lacus metus nec diam.</p>
      : (content.name !== 'Cart Contents')
        ? content.products.map((product) => <ProductListing name={product} />)
        : content.products.map((product) => {console.log('in here'); return (<CartItem name={product.name} />)})
  
    return (
      <div className='flex flex-row bg-red-700 my-1'>
        <div className='flex flex-col w-full'>  
          <SubCategoryHeader name={content.name} />
          <div className='flex flex-row'>
            {(content.name === 'Cart Contents') ? (<div className='flex flex-col'>{renderContent}</div>) : <>{renderContent}</>}
          </div>
        </div>
      </div>
    )
  }

export default SubCategory;