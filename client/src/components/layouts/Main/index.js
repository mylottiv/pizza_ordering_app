import React from 'react';
import MainHeader from './MainHeader';

function MainLayout(props) {
    return(
        <div className='flex flex-1 flex-col ml-2 font-serif'>
            <MainHeader />
            {props.children}
        </div>
    )
}

export default MainLayout;