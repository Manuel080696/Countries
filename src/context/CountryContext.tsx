import React, { useEffect, useState } from "react";
import { CountryContextType } from "../types";

export const CountryContext = React.createContext<CountryContextType>(
  {} as CountryContextType
);

export const CountryProviderComponent = ({ children }: any) => {
  const local = JSON.parse(localStorage.getItem("country"));
  const [country, setCountry] = useState(local || {});
  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(country));
  }, [country, setCountry]);

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
        local,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
