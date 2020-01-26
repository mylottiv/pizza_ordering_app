import React from 'react';
import {MainLayout} from '../..';
import ProductList from './ProductList';

function Product(props) {

    const categories = props.content.map(category => {
        return (<ProductList content={category} />)
      })
    
      console.log('TYPE IS', props.match.params.type);
    
      return (
        <MainLayout name={props.match.params.type.substring(0,1).toUpperCase() + props.match.params.type.substring(1)}>
          {categories}
        </MainLayout>
    )
}

export default Product