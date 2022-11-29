import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/home/home";
import SignInSide from "./Pages/Auth/auth";
import ProtectedRoutes from "./protectedRoutes/protectedRoutes";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInSide />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/weather" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
