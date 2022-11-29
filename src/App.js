import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import HomePage from "./Pages/home/home";
import SignInSide from "./Pages/Auth/auth";

import "./App.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
 
      <Router>
        <Routes>
          <Route exact path="/" element={<SignInSide />} />
          <Route path="/weather" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;

// const fetchCurrent = async () => {

//   try {
//     const response = await fetch(
//       `${CURRENT_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
//     );
//     const data = await response.json();
//     setWeather(data);
//   } catch (e) {
//     console.log(e);
//   }
// };

// useEffect(() => {
//   fetchCurrent();
// });
