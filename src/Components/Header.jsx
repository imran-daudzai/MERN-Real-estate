import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function () {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'  >
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500 '>Daudzai </span>
          <span className='text-slate-700'>State</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center w-80 justify-between' >
          <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-24' />
          <FaSearch/>
        </form>
        <ul className='flex gap-4'>
          <Link to='/Home'>
          <li className='hidden  sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to= '/About'>
          <li className='hidden  sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to = '/Sign-In'>
          <li className=' text-slate-700 hover:underline'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
