import React from 'react';
import CategoryHeader from './CategoryHeader'

function CategoryLayout(props) {
    return (
      <div className='flex flex-row bg-red-700 my-1'>
        <div className='flex flex-col w-full'>  
          <CategoryHeader name={props.name} />
          <div className='flex flex-row'>
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default CategoryLayout