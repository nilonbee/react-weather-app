import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import Context from "./components/context/context";

const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'dev-e8ba64d3dqoriwyl.us.auth0.com';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'NUxdP3AlTZ6GjuL4OOcEbLiaAxLUS9Uy';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={"http://localhost:3000/weather"}
      audiance="unique identifier"
      scope="openid profile email"
    >
      <Context>
        <App />
      </Context>
    </Auth0Provider>
  </React.StrictMode>
);
