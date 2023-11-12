export type APIContextType = {
  APIKEY: string;
};

export type CountryContextType = {
  country;
  setCountry: React.Dispatch<React.SetStateAction<Country>>;
  local;
};

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
