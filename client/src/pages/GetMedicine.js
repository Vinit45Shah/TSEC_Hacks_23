import React, { useEffect, useState } from "react";
import MedicineCard from "../components/MedicineCard";
import Navbar from "../components/Navbar";
import img from "../assets/bg.jpg";
import img1 from "../assets/img1.jpg";
import axios from "axios";

const GetMedicine = ({ org }) => {
  const [meds, setMeds] = useState([]);
  const url = "http://localhost:5000";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url + `/fetchAllMedicinesFor${org}`);
        setMeds(res.data.med);
      } catch (err) {
        alert("Error");
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-4 justify-evenly px-8 pt-8 ">
        {meds &&
          meds[0] &&
          meds.map((element, index) => {
            return (
              <MedicineCard
                name={element.commonname}
                quantity={element.quantity}
                expiry={element.expiry.split("T")[0]}
                img={
                  element.image
                    ? "data:image/jpg;base64," +
                      _arrayBufferToBase64(element.image.data.data)
                    : img
                }
                key={index}
                oid={element._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GetMedicine;
