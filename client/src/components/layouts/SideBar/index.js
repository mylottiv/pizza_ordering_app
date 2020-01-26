import React from 'react';
import SideBarHeader from './SideBarHeader';

function SideBarLayout(props) {
    
    // Ensure the widths of both divs match
    return (
      <div className="flex flex-col w-56">
        <div className='fixed flex-1 w-56 h-full'>
            <SideBarHeader />
            {props.children}
        </div>
      </div>
    )
}

export default SideBarLayout;