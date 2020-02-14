import React from 'react';
import {Category, ContentLayout, MainLayout} from '../..';
import CouponList from './CouponList';

function Home(props) {

  // Homepage View
    return (
        <MainLayout>
            <ContentLayout name='Home' >
                <CouponList content={['BOGO', '50% off']}/>
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
            </ContentLayout>
        </MainLayout>
    )
}

export default Home