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
                expiry={element.expiry}
                img={
                  element.image
                    ? "data:image/jpg;base64," +
                      btoa(
                        String.fromCharCode.apply(
                          null,
                          new Uint8Array(element.image.data.data)
                        )
                      )
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
