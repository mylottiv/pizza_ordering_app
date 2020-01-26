import React from 'react';
import {CategoryLayout} from '../';

function Category({content}) {

    console.log(content);

    // If no products returns default paragraph
    // Otherwise populates with either Product Listings or Cart Items
    console.log(content.name)
    const renderContent = <p className='text-lg'>Nunc sed tortor sapien. In id lectus vel risus dignissim condimentum at ut sapien. Suspendisse consequat convallis dolor sit amet elementum. Curabitur nec velit non urna faucibus feugiat. Duis finibus dictum dolor ut tempus. Curabitur et lectus tincidunt, tempus justo sit amet, vulputate elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a fringilla mauris. Aenean pretium, metus non suscipit hendrerit, urna est ullamcorper lectus, in hendrerit lacus metus nec diam.</p>
  
    return (
      <CategoryLayout name={content.name}>
        {renderContent}
      </CategoryLayout>
    )
  }

export default Category;