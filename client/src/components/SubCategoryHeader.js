import React from 'react';

function SubCategoryHeader(props) {
    return (
      <div className='flex flex-row'>
        <h1 className='flex-1 text-2xl font-bold text-center'>{props.name}</h1>
      </div>
    )
  }

export default SubCategoryHeader