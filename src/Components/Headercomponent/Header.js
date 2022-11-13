import React from 'react'

const Header = (props) => {
    return (
        <header className='flex flex-row justify-center items-center py-6 bg-blue-800'>
            <h1 className='text-5xl text-blue-100 hover:text-white font-thin'>{props.title}</h1>
        </header>
    )
}

export default Header