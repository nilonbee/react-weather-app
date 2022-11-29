import React from "react";
import { useGlobalContext } from "../../components/context/context";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CurrentWeather from "../../components/currentWeather/currentWeather";
import SearchAppBar from "../../components/NavBar/navbar";

import "./home.css";



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const { loading } = useGlobalContext();

  return (
    <div className="home-wrapper">
      <SearchAppBar/>
      <CurrentWeather />
    </div>
  );
};

export default HomePage;
