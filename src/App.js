import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details";
import HomePage from "./components/Product/HomePage";
import ImageSlider from "./components/ImageSlider/ImageSlider";

const App = () => {
  return (
    <>
      <Navbar />      
      <Routes>
          <Route path="/" element={<React.Fragment>
            <ImageSlider />
            <HomePage />
            </React.Fragment>} />
          <Route path="/details/:detailslug" element={<Details/>} />
          {/* <Route path="/checkout" element={<Checkout/>}/> */}
      </Routes>

    </>
  );
};

export default App;
