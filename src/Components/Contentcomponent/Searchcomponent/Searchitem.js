import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchitem = ({ search, setSearch }) => {
    return (
        <div className='flex flex-row justify-center'>
            <form className='searchForm ' onSubmit={(e) => e.preventDefault()}>
                <input id='search'
                    role='searchbox'
                    className='self-auto border-2 outline-slate-400 h-10 mx-8 font-thin text-2xl text-gray-500'
                    placeholder='Search'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
        </div>
    )
}

export default Searchitem