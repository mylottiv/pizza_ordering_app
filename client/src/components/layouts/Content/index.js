import React from 'react';
import ContentHeader from './ContentHeader.js';

function ContentLayout(props) {
    return (
      <div className='flex flex-1 flex-col'>
        <ContentHeader name={props.name} />
        {props.children}
      </div>
    )
  }

export default ContentLayout;