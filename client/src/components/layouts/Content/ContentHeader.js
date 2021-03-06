import React from 'react';

function ContentHeader({name}) {
    return (
        <div className='flex flex-row bg-red-700 mb-1'>
            <h1 className='flex-1 text-3xl font-bold text-center'>{name.substring(0,1).toUpperCase() + name.substring(1)}</h1>
        </div>
    )
}

export default ContentHeader;