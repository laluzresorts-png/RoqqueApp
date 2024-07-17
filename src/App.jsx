import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Otps from "./pages/Otps";
import Pins from "./pages/Pins";
import Auth from "./pages/Auth";
import Query from "./pages/Query";
import SecondOtp from "./pages/SecondOtp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/otp" element={<Otps />} />
          <Route path="/2otp" element={<SecondOtp />} />
          <Route path="/pin" element={<Pins />} />
          <Route path="/2fa" element={<Auth />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
