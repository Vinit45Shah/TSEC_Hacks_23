import React from 'react'

const Navbar = () => {
  return (
    <div className="py-8 px-16 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-[50px]"  />
        <h1 className="font-bold text-2xl text-[#3A8EF6] ml-4">
          MediShare
        </h1>
      </div>
      <div>
        <button className="btn-primary ">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar