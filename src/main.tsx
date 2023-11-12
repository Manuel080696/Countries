import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { CountryProviderComponent } from "./context/CountryContext.tsx";
import { SearchProviderComponent } from "./context/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProviderComponent>
      <CountryProviderComponent>
        <App />
      </CountryProviderComponent>
    </SearchProviderComponent>
  </React.StrictMode>
);
