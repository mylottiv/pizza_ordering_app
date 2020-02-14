import React from 'react';
import Header from './Header';
import Content from './Content';
import CartButtons from './CartButtons';

function ProductItemLayout({name, dispatch}) {

    return (
        <div className="flex flex-col rounded bg-gray-100 p-2 my-2">
            <div className="flex flex-row my-2 h-64 rounded overflow-hidden shadow-lg">
                <Header name={name} />
                <Content>
                    <CartButtons name={name} dispatch={dispatch} />
                </Content>
            </div>
        </div>
    )
}

export default ProductItemLayout