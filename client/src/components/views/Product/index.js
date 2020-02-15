import React from 'react';
import {ContentLayout, MainLayout} from '../..';
import ProductList from './ProductList';

function Product({match, content}) {

    const categories = content.map(category => {
        return (<ProductList content={category} />)
      })
    
      console.log('TYPE IS', match.params.type);
    
      return (
        <MainLayout>
          <ContentLayout name={match.params.type.substring(0,1).toUpperCase() + match.params.type.substring(1)}>
            {categories}
          </ContentLayout>
        </MainLayout>
    )
}

export default Product