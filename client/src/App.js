import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostMedicine from "./pages/PostMedicine";
import UserLandingPage from "./pages/UserLandingPage";
function App() {
  return (
    <div className="App font-ourfont">
      <Router>
        <Routes>
          <Route path="/clienthome" element={<UserLandingPage/>} />
          <Route path="/postmedicine" element={<PostMedicine/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
