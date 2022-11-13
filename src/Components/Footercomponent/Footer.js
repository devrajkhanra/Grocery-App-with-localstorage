import React from 'react'

const Footer = ({ length }) => {
    return (
        <footer className='flex flex-row justify-center items-center py-6 bg-blue-800'>
            <div className='flex flex-col'>
                <p className='text-blue-300 font-thin text-2xl'>Number of Grocery {length === 1 ? 'Item' : 'Items'}: <strong className='text-3xl'>{length}</strong></p>
                <h1 className='text-5xl text-blue-100 hover:text-white font-thin'>App &copy; {new Date().getFullYear()}</h1>
            </div>
        </footer>
    )
}

export default Footer