import React from 'react';

function CouponItemLayout({name, children}) {

    return (
        <div className="flex flex-col rounded bg-gray-100 p-2 my-2">
            <div className="flex flex-row rounded overflow-hidden shadow-lg">
                <div className="font-bold text-xl text-center">{name}</div>
            </div>
            {children}
        </div>
    )
}

export default CouponItemLayout;