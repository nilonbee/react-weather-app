import React, { useState, useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import { CURRENT_API_URL, WEATHER_API_KEY } from "../../api/api";
import { geoApiOptions, GEO_API_URL } from "../../api/api";

const AppContext = React.createContext();

const Context = React.memo(({ children }) => {
  const [weather, setWeather] = useState(null);
  // const [forcast, setForcast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const {loginWithRedirect, isAuthenticated, user } = useAuth0();

  const loadOptions = (inputValue) => {
    console.log("inputValue", inputValue);
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    setLoading(true);
    const currentWeatherFetch = fetch(
      `${CURRENT_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // const forcastFetch = fetch(
    //   `${CURRENT_API_URL}/forecast/climate?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        // const forcastResponse = await response[1].json();
        setWeather({ city: searchData.label, ...weatherResponse });
        setLoading(false);
        // setForcast({city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    handleSearchChange(searchData);
    console.log("searchData", searchData);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          handleSearchChange,
          weather,
          loading,
          setLoading,
          search,
          handleOnChange,
          loadOptions,
          loginWithRedirect, 
          isAuthenticated, 
          user
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
});

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
