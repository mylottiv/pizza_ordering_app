import React from 'react';

function CategoryHeader(props) {
    return (
      <div className='flex flex-row my-2'>
        <h1 className='flex-1 text-2xl font-bold text-center'>{props.name}</h1>
      </div>
    )
  }

export default CategoryHeader