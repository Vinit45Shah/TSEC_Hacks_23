import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostMedicine from "./pages/PostMedicine";
import UserLandingPage from "./pages/UserLandingPage";
import Login from "./pages/Login";
import OCR from "./components/OCR";
import Diabetes from "./components/Diabetes";

function App() {
  return (
    <div className="App font-ourfont">
      <Router>
        <Routes>
          <Route path="/clienthome" element={<UserLandingPage/>} />
          <Route path="/postmedicine" element={<PostMedicine/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/ocr" element={<OCR/>} />
          <Route path="/predict" element={<Diabetes/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
