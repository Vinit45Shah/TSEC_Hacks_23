import React from 'react'
import MedicineCard from '../components/MedicineCard'
import Navbar from '../components/Navbar'
import img from '../assets/bg.jpg'
import img1 from '../assets/img1.jpg'
const GetMedicine = () => {
    return (
        <div>
            <Navbar/>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-4 justify-evenly px-8 '>
                <MedicineCard name="Crocin" quantity="2" expiry="12-02-2023" img={img}/>
                <MedicineCard name="Dolo" quantity="1" expiry="12-02-2023" img={img1}/>
                <MedicineCard name="Malum Nahi" quantity="3" expiry="12-02-2023" img={img}/>
                <MedicineCard name="Dolo dose 2" quantity="1" expiry="12-02-2023" img={img1}/>
                <MedicineCard name="Dolo dose 3" quantity="2" expiry="12-02-2023" img={img}/>

            </div>
        </div>
    )
}

export default GetMedicine