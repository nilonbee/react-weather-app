import React from "react";

import { useGlobalContext } from "../components/context/context";
import SignInSide from "../Pages/auth/auth";
import HomePage from "../Pages/home/home";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useGlobalContext();

  return isAuthenticated ? <HomePage /> : <SignInSide />;
};

export default ProtectedRoutes;
