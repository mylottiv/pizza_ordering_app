import React from 'react';
import {CategoryLayout} from '../..';
import CouponCard from './CouponCard';

function CouponList({content}) {

    console.log(content);

    // Populates with Product Cards
    const renderContent = content.map((coupon) => {console.log(coupon); return (<CouponCard key={coupon} name={coupon} />)})
    
    return (
        <CategoryLayout name={'Coupons'}>
            {renderContent}
        </CategoryLayout>
    )
}

export default CouponList