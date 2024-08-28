import React from 'react'

export default function LoginForm() {
  return (
    <form action="" className='border py-6 px-8 rounded-lg shadow-lg space-y-6 bg-white max-w-sm mx-auto'>
      <h2 className='text-2xl font-bold text-gray-700 text-center'>Welcome Back</h2>
      
      <div className='flex flex-col'>
        <label htmlFor="username" className='text-gray-600 mb-2'>Username</label>
        <input 
          className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition duration-200 ease-in-out' 
          type="text" 
          id='username' 
          placeholder='Enter your username' 
        />
      </div>
      
      <div className='flex flex-col'>
        <label htmlFor="password" className='text-gray-600 mb-2'>Password</label>
        <input 
          className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition duration-200 ease-in-out' 
          type="password" 
          id='password' 
          placeholder='Enter your password' 
        />
      </div>
      
      <button className='w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out'>
        Login
      </button>
      
      <p className='text-sm text-center text-gray-500 mt-4'>
        Forgot your password? <a href="#" className='text-blue-500 hover:underline'>Reset it</a>
      </p>
    </form>
  )
}
