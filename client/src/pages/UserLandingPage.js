import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Want from '../assets/Want.gif'
import Donate from '../assets/Donate.gif'
import Doctor from '../assets/doctor.gif'
import Search from '../assets/Search.gif'

const handleOnClick=()=>{

}

const userLandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-16 space-y-12 pb-12'>
        <div className=' flex justify-evenly'>
          <Card heading="Want Medicine?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto." onClick={handleOnClick}/>
          <img src={Want} alt="img" className='w-64 -translate-y-6'/>
        </div>

        <div className='px-16 flex justify-evenly'>
        <img src={Donate} alt="img" className='w-64 -translate-y-6'/>
        {}
          <Card heading="Donate Medicine?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto."/>
        </div>

        <div className='px-16 flex justify-evenly'>
          <Card heading="Search Medicine?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto."/>
          <img src={Search} alt="img" className='w-64 -translate-y-6'/>
        </div>

        <div className='px-16 flex justify-evenly'>
        <img src={Doctor} alt="img" className='w-64 -translate-y-6'/>
          <Card heading="Need Consultation?" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus explicabo cumque, impedit qui libero dicta, ipsum laudantium officiis porro voluptates a aliquam tempore dolorem magnam ducimus odio repellendus architecto."/>
        </div>
        </div>
    </div>
  )
}

export default userLandingPage