import React from 'react'
import Inlineitem from '../Inlineitemcomponent/Inlineitem'

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <Inlineitem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default ItemList