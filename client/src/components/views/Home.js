import React from 'react';
import {Category, MainLayout} from '../'

function Home(props) {

  // Homepage View
    return (
      <MainLayout name='Home' >
          <Category content={{name: 'HOME TEST'}} />
          <Category content={{name: 'HOME TEST'}} />
          <Category content={{name: 'HOME TEST'}} />
          <Category content={{name: 'HOME TEST'}} />
          <Category content={{name: 'HOME TEST'}} />
          <Category content={{name: 'HOME TEST'}} />
      </MainLayout>
    )
}

export default Home;