import React, { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "../../components/Navbar";

const Diabetes = () => {
  const [pregnancies, setPregnancies] = useState();
  const [glucose, setGlucose] = useState();
  const [bp, setBp] = useState();
  const [skin, setSkin] = useState();
  const [insulin, setInsulin] = useState();
  const [bmi, setBmi] = useState();
  const [pedigree, setPedigree] = useState();
  const [age, setAge] = useState();
  const [outcome, setOutcome] = useState(null);

  useEffect(() => {}, [outcome]);

  function changePreg(e) {
    setPregnancies(e.target.value);
  }
  function changeGlu(e) {
    setGlucose(e.target.value);
  }
  function changeBp(e) {
    setBp(e.target.value);
  }
  function changeSkin(e) {
    setSkin(e.target.value);
  }
  function changeInsu(e) {
    setInsulin(e.target.value);
  }
  function changeBmi(e) {
    setBmi(e.target.value);
  }
  function changePedigree(e) {
    setPedigree(e.target.value);
  }
  function changeAge(e) {
    setAge(e.target.value);
  }

  const url = "http://localhost:7000";

  async function predict(e) {
    e.preventDefault();

    const data = {
      pregnancies,
      glucose,
      bp,
      skin,
      insulin,
      bmi,
      pedigree,
      age,
    };
    try {
      const response = await axios.post(`${url}/predict`, {},
        {
          headers: data,
        }
      );
      console.log(response.data);
      setOutcome(response.data.prediction);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="w-full h-full">
      <div id="dropdown" className="bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700" >
        <div className="m-10 border border-slate-100 rounded-xl flex flex-col justify-between items-center">
          <input
            type="number"
            placeholder="No. Of Pregnancies"
            value={pregnancies}
            onChange={changePreg}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Glucose Level"
            value={glucose}
            onChange={changeGlu}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Blood Pressure"
            value={bp}
            onChange={changeBp}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Skin Thickness"
            value={skin}
            onChange={changeSkin}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Insulin Level"
            value={insulin}
            onChange={changeInsu}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="BMI"
            value={bmi}
            onChange={changeBmi}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Diabetes Pedigree Function"
            value={pedigree}
            onChange={changePedigree}
            className="p-3 m-3 rounded-md"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={changeAge}
            className="p-3 m-3 rounded-md"
          />
          <button
            className="text-white mb-5 bg-btn-left hover:bg-btn-right font-medium rounded-lg text-sm px-4 py-2 mx-5"
            onClick={predict}
            type="submit"
          >
            Submit
          </button>
          {outcome && (
            <p className="text-white text-lg font-bold mb-10">
              {outcome === 1 ? "You have Diabetes" : "You don't have Diabetes"}
            </p>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Diabetes;
