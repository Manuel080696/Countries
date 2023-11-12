import React, { useState } from "react";
import { SearchContextType } from "../types";

export const SearchContext = React.createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchProviderComponent = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
