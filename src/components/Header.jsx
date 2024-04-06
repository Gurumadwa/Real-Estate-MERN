import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>


      <div className='p-4 flex justify-between items-center max-w-6xl mx-auto'>

        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-400'>Homes</span>
            <span className='text-slate-600'>4</span>
            <span className='text-teal-800'>You</span>
          </h1>
        </Link>

        <form action="" className='bg-slate-100 p-2 rounded-lg flex justify-center items-center' >
          <input type="text" placeholder='Search Here...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
          <IoSearchSharp className='text-slate-500 cursor-pointer'/>
        </form>


        <ul className='flex gap-4'>
        <Link to='/'>
          <li className='text-slate-700 hover:underline hidden sm:inline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='text-slate-700 hover:underline hidden sm:inline'>About</li>
        </Link>
        <Link to='/sign-in'>
        <li className='text-slate-700 '>Sign In</li>
        </Link>
      </ul>

      </div>


    </header>
  )
}

export default Header