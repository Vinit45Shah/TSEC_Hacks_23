import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostMedicine from "./pages/PostMedicine";
import GetMedicine from "./pages/GetMedicine";
import UserLandingPage from "./pages/UserLandingPage";
import Login from "./pages/Login";
import OCR from "./components/OCR";
import Medicine from "./pages/Medicine";
import Diabetes from "./components/Diabetes";
import Home from "./pages/Home";
import FindMedicine from "./components/FindMedicine";

function App() {
  return (
    <div className="App font-ourfont overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/medicine/:id" element={<Medicine />} />
          <Route path="/fetchallmedicine" element={<GetMedicine />} />
          <Route path="/clienthome" element={<UserLandingPage />} />
          <Route path="/postmedicine" element={<PostMedicine />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ocr" element={<OCR />} />
          <Route path="/predict" element={<Diabetes />} />
          <Route path="/" element={<Home />} />
          <Route path="/find-medicine" element={<FindMedicine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
