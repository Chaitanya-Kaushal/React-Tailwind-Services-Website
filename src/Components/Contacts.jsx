import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-slate-900 w-full h-screen flex flex-col justify-center items-center'>
        <div className='bg-white w-[75%]  my-4 rounded-r-[200px] h-screen flex flex-col justify-center items-center'>
            <div className='mb-12'>
                <h2 className='text-3xl text-gray-700 font-bold'>Contact Us</h2>
            </div>
            <div className='flex flex-col'>
                
                <input className='px-8 rounded-md my-2 py-2  border border-blue-500' type="text" placeholder='Enter Your Name' />
                
                <input type="text" className='px-8 rounded-md  my-2 py-2 border border-blue-500' placeholder='Enter Your Email' />
                
                <input type="text" className='px-8 rounded-md  my-2 py-2 border border-blue-500' placeholder='Tell us About Your Query' />
            </div>
                <button className='my-6 text-white bg-blue-700 py-3 px-6 rounded-lg '> Submit</button>
        </div>
    </div>
  )
}

export default Contacts