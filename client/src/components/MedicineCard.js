import React from 'react'

const MedicineCard = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 mx-6">
  <img src={props.img} alt="Medicine image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <p className="text-gray-700 text-base">
      Quantity: {props.quantity}
    </p>
    <p className="text-gray-700 text-base">
      Expiry: {props.expiry}
    </p>
  </div>
</div>
  )
}

export default MedicineCard