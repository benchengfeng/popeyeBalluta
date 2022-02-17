import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./landingPage";
import Home from "./home";

const PagesNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default PagesNavigation;
