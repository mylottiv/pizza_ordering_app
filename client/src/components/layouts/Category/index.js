import React from 'react';
import CategoryHeader from './CategoryHeader'

function CategoryLayout(props) {
    return (
      <div className='flex flex-row bg-green-700 my-1'>
        <div className='flex flex-col w-full mx-5'>  
          <CategoryHeader name={props.name} />
          <div className='flex flex-row mb-2'>
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default CategoryLayout