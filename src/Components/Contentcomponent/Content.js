import React from 'react'
import ItemList from './Itemlistcomponent/ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <div className='py-6 flex flex-row justify-center items-center'>
            {items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : (
                <label className='font-thin text-gray-500 text-7xl'>Your list is empty</label>
            )
            }
        </div>
    )
}

export default Content