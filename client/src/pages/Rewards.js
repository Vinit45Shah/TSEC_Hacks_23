import React from 'react'
import Navbar from '../components/Navbar'
import Amazon from '../assets/amazon.png'
import Spotify from '../assets/spotify.png'
import Zomato from '../assets/Zomato.png'
const Rewards = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='font-bold text-4xl text-center py-12'>Your Rewards</div>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-4 justify-evenly px-8 mb-16 space-x-12'>
                    <div className='bg-primary-gray rounded-lg overflow-hidden shadow-lg'>
                        <img src={Amazon} alt="Company Logo" className='h-48 w-full' />
                        <div className='p-8'>
                            <div className='p-2 space-y-2'>
                                <div className='font-semibold text-2xl'>Rs.200 Amazon Gift Voucher</div>
                                <div className='font-medium text-lg'>20 points</div>
                            </div>
                            <button className='btn-primary'>Claim Now</button>
                        </div>
                    </div>

                    <div className='bg-primary-gray rounded-lg overflow-hidden shadow-lg'>
                        <img src={Spotify} alt="Company Logo" className='h-48' />
                        <div className='p-8'>
                            <div className='p-2 space-y-2'>
                                <div className='font-semibold text-2xl'>Rs.150 Spotify Premium Subscription</div>
                                <div className='font-medium text-lg'>20 points</div>
                            </div>
                            <button className='btn-primary'>Claim Now</button>
                        </div>
                    </div>

                    <div className='bg-primary-gray rounded-lg overflow-hidden shadow-lg'>
                        <img src={Zomato} alt="Company Logo" className='h-48' />
                        <div className='p-8'>
                            <div className='p-2 space-y-2'>
                                <div className='font-semibold text-2xl'>Rs.400 on your First Zomato Order</div>
                                <div className='font-medium text-lg'>100 points</div>
                            </div>
                            <button className='btn-primary'>Claim Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards