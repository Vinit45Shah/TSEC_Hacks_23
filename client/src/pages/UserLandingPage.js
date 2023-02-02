import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Want from '../assets/Want.gif'
import Donate from '../assets/Donate.gif'
import Doctor from '../assets/doctor.gif'
import Search from '../assets/Search.gif'
import bg from '../assets/bg.jpg'

const handleOnClick = () => {

}

const userLandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='px-16 pb-12 bg-gradient-to-r from-primary-dark to-primary-light flex justify-center py-8'>
        <div className='space-y-4 w-8/12 '>
          <div className='px-16 justify-evenly flex bg-white rounded-md py-4'>
            <Card heading="Want Medicine?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto." />
            <img src={Want} alt="img" className='w-56 ' />
          </div>

          <div className='px-16 flex justify-evenly bg-white rounded-md py-4'>
            <img src={Donate} alt="img" className='w-56' />
            <Card heading="Donate Medicine?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto." />
          </div>

          <div className='px-16 flex justify-evenly bg-white rounded-md py-4'>
            <Card heading="Search Medicine?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto." />
            <img src={Search} alt="img" className='w-56' />
          </div>

          <div className='px-16 flex justify-evenly bg-white rounded-md py-4'>
            <img src={Doctor} alt="img" className='w-56' />
            <Card heading="Need Consultation?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto." />
          </div>
        </div></div>
    </div>
  )
}

export default userLandingPage