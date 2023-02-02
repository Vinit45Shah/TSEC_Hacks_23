import React from 'react'

const Navbar = () => {
  return (
    <div className="py-2 px-16 flex items-center bg-primary-gray justify-between border-2 border-b-primary-gray ">
      <div className="flex items-center">
        <img className="w-[50px]"  />
        <a href='/' className="font-bold text-2xl text-[#3A8EF6] ml-4">
          MediShare
        </a>
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