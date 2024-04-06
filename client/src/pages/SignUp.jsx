import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='max-w-xl mx-auto p-3'>

      <h1 className='text-center font-bold text-3xl my-7'>Sign Up</h1>

      <form className='flex flex-col gap-5'>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg focus:outline-none' />
        <input type="text" placeholder='email' className='border p-3 rounded-lg focus:outline-none'/>
        <input type="text" placeholder='Password' className='border p-3 rounded-lg focus:outline-none'/>

        <button className='bg-teal-800 text-white p-3 rounded-lg hover:opacity-90 disabled:opasity-70'>Sign Up</button>
      </form>

      <div className='flex my-5 gap-2 '>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-600 hover:underline'>Sign in</span>
        </Link>
      </div>

    </div>
  )
}

export default SignUp