import React from 'react';
import {CategoryLayout} from '../..'
import ProductCard from './ProductCard';

function ProductList({content}) {

    // Populates with Product Cards
    const renderContent = content.products.map((product) => (<ProductCard name={product.name} />))
    
    return (
        <CategoryLayout name={content.category}>
            {renderContent}
        </CategoryLayout>
    )
}

export default ProductList;