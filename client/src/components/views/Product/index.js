import React from 'react';
import {ContentLayout, MainLayout} from '../..';
import ProductList from './ProductList';

function Product(props) {

    const categories = props.content.map(category => {
        return (<ProductList content={category} />)
      })
    
      console.log('TYPE IS', props.match.params.type);
    
      return (
        <MainLayout>
          <ContentLayout name={props.match.params.type.substring(0,1).toUpperCase() + props.match.params.type.substring(1)}>
            {categories}
          </ContentLayout>
        </MainLayout>
    )
}

export default Product