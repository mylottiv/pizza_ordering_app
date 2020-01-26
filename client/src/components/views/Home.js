import React from 'react';
import {Category, ContentLayout, MainLayout} from '../'

function Home(props) {

  // Homepage View
    return (
        <MainLayout>
            <ContentLayout name='Home' >
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
                <Category content={{name: 'HOME TEST'}} />
            </ContentLayout>
        </MainLayout>
    )
}

export default Home;