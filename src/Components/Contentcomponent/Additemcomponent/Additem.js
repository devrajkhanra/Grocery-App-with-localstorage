import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef()
    return (
        <div className='pt-6 flex flex-row justify-center'>
            <form className='addForm ' onSubmit={handleSubmit}>
                <input
                    className='grow self-auto border-2 outline-slate-400 h-10 mx-8 font-thin text-2xl text-gray-500'
                    ref={inputRef}
                    id='addItem'
                    type='text'
                    placeholder='Add item'
                    required value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} />
                <button
                    className='self-auto text-center text-1xl h-10 text-green-600 hover:text-green-50 hover:bg-green-600 px-2 rounded-sm shadow-lg'
                    type='submit'
                    aria-label='Add Item'
                    onClick={() => inputRef.current.focus()}><FaPlus />
                </button>
            </form>
        </div>
    )
}

export default Additem