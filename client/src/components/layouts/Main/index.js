import React from 'react';
import MainHeader from './MainHeader.js';

function MainLayout(props) {
    return (
      <div className='flex flex-1 flex-col ml-1'>
        <MainHeader name={props.name} />
        {props.children}
      </div>
    )
  }

export default MainLayout;