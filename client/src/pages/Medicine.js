import React from 'react'
import Navbar from '../components/Navbar'
import bg from '../assets/bg.jpg'
const Medicine = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex px-8 justify-evenly'>
            <img src={bg} alt="Medicine" className='w-1/2'/>
            <div className='bg-primary-gray rounded-lg p-8 space-y-4 flex flex-col justify-between'>
                <div className='space-y-4'>
                <div className='font-semibold text-xl text-center'>Name</div>
                <div className='flex justify-between'>
                    <div className='pr-2 space-y-4'>
                        <div className='font-semibold'>Quantity: <span className='font-normal'>3</span></div>
                        <div className='font-semibold'>Time: <span className='font-normal'>2pm - 4pm</span></div>
                    </div>
                    <div className='pl-2 space-y-4'>
                        <div className='font-semibold'>Expiry: <span className='font-normal'>12-02-2023</span></div>
                        <div className='font-semibold'>Owned by: <span className='font-normal'>Saday Saday</span></div>
                    </div>
                </div>
                <div className='font-semibold'>Address: <span className='font-normal'>Antilla, Hetvi's Home</span></div>
                </div>
                <button className='btn-primary w-full my-48'>Get Now</button>
            </div>
        </div>
    </div>
  )
}

export default Medicine