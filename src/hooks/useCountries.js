import { useContext, useEffect } from "react";
import { useState } from "react";
import { getAllCountries } from "../services";
import { SearchContext } from "../context/SearchContext";

const useCountries = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await getAllCountries();

        if (searchTerm !== null) {
          setCountries(
            data &&
              data?.filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
          );
        } else {
          countries;
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, [loading, setSearchTerm, searchTerm]);

  return {
    countries,
    error,
  };
};

export default useCountries;
