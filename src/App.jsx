import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Historia from "./pages/Historia";
import Tipos from "./pages/Tipos";

import Basic from "./pages/Basic";
import COBOL from "./pages/COBOL";
import FORTRAN from "./pages/FORTRAN";
import Java from "./pages/Java";
import C from "./pages/C";
import Python from "./pages/Python";
import PHP from "./pages/PHP";
import SQL from "./pages/SQL";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer"; 

function App() {
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", 
  };

  const contentStyle = {
    flex: "1",
  };

  return (
    <Router>
      <div style={appStyle}>
        <NavigationBar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Historia" element={<Historia />} />
            <Route path="/Tipos" element={<Tipos />} />

            <Route path="/Basic" element={<Basic />} />
            <Route path="/COBOL" element={<COBOL />} />
            <Route path="/FORTRAN" element={<FORTRAN />} />
            <Route path="/Java" element={<Java />} />
            <Route path="/C" element={<C />} />
            <Route path="/Python" element={<Python />} />
            <Route path="/PHP" element={<PHP />} />
            <Route path="/SQL" element={<SQL />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

