import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div className='text-center mt-5'>
            <h1 className='mb-4'>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer