import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Consult = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const response = await fetch("http://localhost:5000/getAllDoctors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
      setDoctors(json);
      setLoading(false);
    };
    getDoctors();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-primary-dark to-primary-light h-screen mx-auto text-white text-center">
        <div className="text-center font-bold text-3xl p-2 pt-6">
          Consult With The Doctors
        </div>
      </div>
    </div>
  );
};

export default Consult;
