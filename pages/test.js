import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


const Test = () => {
    return (
      <div className='flex justify-center items-center h-screen  bg-gradient-to-br from-blue-400 to-blue-800'>
        <div className='h-1/2 w-1/2  border-2 border-solid  border-blue-700 rounded-lg shadow-2xl bg-blue-600 p-5'>
          <h1 className='text-4xl text-center text-white font-semi-bold antialiased'>Login</h1>
          <form className='flex flex-col justify-around items-center'>
            <div className='p-3 min-w-full text-center'> 
              <label for='email' className='block mb-2 text-lg text-white uppercase'>Email Address</label>
              <input  className='block' type="email" name='email' placeholder="Please enter your email"></input>
            </div>
            <div className='p-3'>
              <label className='block mb-2 text-lg text-white uppercase' for='password'>Password</label>
              <input  className='block' type="password" name='password' placeholder="Please enter your password"></input>
            </div>  
          </form>
          
        </div>
      </div>
    )
}

export default Test;
