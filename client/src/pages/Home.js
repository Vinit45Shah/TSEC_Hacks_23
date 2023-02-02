import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/login");
  }, 2300);

  return (
    <div className="customDiv customBody font-ourfont font-semibold">
      <span id="A1" className="customSpan">
        M
      </span>
      <span id="A2" className="customSpan">
        E
      </span>
      <span id="A3" className="customSpan">
        D
      </span>
      <span id="A4" className="customSpan">
        I
      </span>
      <span id="A4" className="customSpan">
        -
      </span>
      <span id="A5" className="customSpan">
        S
      </span>
      <span id="A6" className="customSpan">
        H
      </span>
      <span id="A7" className="customSpan">
        A
      </span>
      <span id="A8" className="customSpan">
        R
      </span>
      <span id="A9" className="customSpan">
        E
      </span>
    </div>
  );
};

export default Home;
