import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.jpg";
import girl from "../assets/girl.png";
const PostMedicine = () => {
  const [commonname, setcommonname] = useState("");
  const [quantity, setquantity] = useState(0);
  const [expiry, setexpiry] = useState(null);
  const [scientificname, setscientificname] = useState("");
  const [manufacturer, setmanufacturer] = useState("");
  const [time, settime] = useState("");
  const [file, setfile] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="mx-auto bg-gradient-to-r from-primary-dark to-primary-light min-h-screen rounded-xl text-white w-3/4">
        <div className="text-center font-bold text-3xl p-2 pt-6">
          Donate Medicines
        </div>
        <div className="flex justify-center space-x-4 ">
          {/* <img src={bg} alt="img" className='backgroundimage relative opacity-50 rounded-lg ' /> */}
          <div className="rounded-lg flex">
            <img src={girl} alt="image" className="-translate-y-4" />
            <div className="flex flex-col min-w-full min-h-full mb-7">
              <div className="py-2 px-4">
                <label className="font-medium text-lg">Common Name:</label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="text"
                    name="commonName"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={commonname}
                    onChange={(e) => {
                      setcommonname(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="py-2 px-4">
                <label className="font-medium text-lg">Quantity:</label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="number"
                    name="quantity"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="py-2 px-4">
                <label className="font-medium text-lg">Expiry Date:</label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="date"
                    name="expiry_date"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={expiry}
                    onChange={(e) => {
                      setexpiry(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="py-2 px-4">
                <label className="font-medium text-lg">Scientific Name:</label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="text"
                    name="scientificName"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={scientificname}
                    onChange={(e) => {
                      setscientificname(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="py-2 px-4">
                <label className="font-medium text-lg">Manufacturer:</label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="text"
                    name="scientificName"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={manufacturer}
                    onChange={(e) => {
                      setmanufacturer(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="py-2 px-4">
                <label className="font-medium text-lg">
                  Picture of the medicine:
                </label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="file"
                    name="picture"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={file}
                    onChange={(e) => {
                      setfile(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <button className="btn-primary w-1/3 mx-auto">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMedicine;
