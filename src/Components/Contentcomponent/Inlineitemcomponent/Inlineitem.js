import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Inlineitem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='flex flex-row item items-center py-1'>
            <input className='mx-2 h-3 hover:cursor-pointer' type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label className='grow mx-8 font-thin text-2xl text-gray-500 hover:cursor-pointer hover:text-blue-900 hover:font-normal' onClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt role='button' tabIndex='0' className='text-4xl text-red-600 hover:text-red-50 hover:bg-red-600 px-2 rounded-full shadow-lg' onClick={() => handleDelete(item.id)}></FaTrashAlt>
        </li>
    )
}

export default Inlineitem