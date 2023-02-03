import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.jpg";
import girl from "../assets/girl.png";
import axios from "axios";

const PostMedicine = () => {
  const [commonname, setCommonname] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [expiry, setExpiry] = useState("");
  const [scientificname, setScientificname] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [time, setTime] = useState("");
  const [file, setFile] = useState("");

  const url = "http://localhost:5000/";

  async function post(e) {
    e.preventDefault();
    var form = new FormData();
    form.append("commonname", commonname);
    form.append("quantity", quantity);
    form.append("expiry", expiry);
    form.append("scientificname", scientificname);
    form.append("manufacturer", manufacturer);
    form.append("time", time);
    form.append("image", file, "image.jpg");
    try {
      const res = await axios.post(`${url}postmed`, form, {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mx-auto bg-gradient-to-r from-primary-dark to-primary-light min-h-screen rounded-xl w-3/4">
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
                      setCommonname(e.target.value);
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
                      setQuantity(e.target.value);
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
                      setExpiry(e.target.value);
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
                      setScientificname(e.target.value);
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
                      setManufacturer(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="py-2 px-4">
                <label className="font-medium text-lg">Time Of Delivery:</label>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="text"
                    name="scientificName"
                    className="rounded-xl border border-purple w-96 p-1"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
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
                    name="image"
                    className="rounded-xl border border-purple w-96 p-1"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className="py-2 px-4">
              <button className="btn-primary" onClick={post}>
                Donate
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMedicine;
