import React from "react";

import CurrentWeather from "../../components/currentWeather/currentWeather";
import SearchAppBar from "../../components/navBar/navbar";

import "./home.css";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <SearchAppBar />
      <CurrentWeather />
    </div>
  );
};

export default HomePage;
