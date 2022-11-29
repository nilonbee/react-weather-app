import React from "react";

import { useGlobalContext } from "../context/context";
import LoadingSkeleton from "../../components/skelton/skelton";

import "./currentWeather.css";

const CurrentWeather = () => {
  const { weather, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="skelton">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="weather">
      <div className="top">
        <div className="title-wrapper">
          <p className="city">{weather ? weather.city : "Colombo"}</p>
          <p className="weather-description">
            {weather ? weather.weather[0].description : "Clear"}
          </p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={
            weather ? `icons/${weather.weather[0].icon}.png` : "icons/01d.png"
          }
        />
      </div>
      <div className="bottom">
        <div className="temperature">
          {weather ? `${Math.round(weather.main.temp)}°C` : "27°C"}
        </div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {weather ? `${Math.round(weather.main.feels_like)}°C` : "29°C"}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {weather ? `${weather.wind.speed}m/s` : "4.2m/s"}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {weather ? `${weather.main.humidity}%` : "64%"}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {weather ? `${weather.main.pressure}hPa` : "32hPa"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
