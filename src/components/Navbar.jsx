import React from "react";

import Logo from '../movie logo.png'
import { Link } from 'react-router-dom'


const Navbar= ()  => {
    return (
        <div className='flex border space-x-8 items=centre pl-3 py-4'>
            <img className='w-[50px]' src={Logo} alt =''/>

            <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>
            <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>Watch List</Link>
        </div>
    )
}
export default Navbar;