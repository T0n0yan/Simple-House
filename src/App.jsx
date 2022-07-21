import React from "react";
import { Route, Routes } from "react-router-dom";
import './assets/Styles/Global.scss'
import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact/index";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
