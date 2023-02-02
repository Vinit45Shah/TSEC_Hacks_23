import React from 'react'
import Navbar from '../components/Navbar'

const Rewards = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div className='font-bold text-3xl text-center'>Your Rewards</div>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-4 justify-evenly px-8 '>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rewards