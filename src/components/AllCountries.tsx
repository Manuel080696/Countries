import { useNavigate } from "react-router-dom";
import "../styles/AllCountries.css";
import { PhotoCard } from "./PhotoCard";
import { Search } from "./Search";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import useCountries from "../hooks/useCountries";

export const AllCountries = () => {
  const { country, setCountry } = useContext(CountryContext);
  const { countries } = useCountries();
  const navigate = useNavigate();
  const APIKEY = import.meta.env.VITE_API_KEY;

  const handleClick = async (e, isCountry) => {
    e.preventDefault();
    setCountry(isCountry);
    navigate(`/country/${country.name.common}`);
  };

  return (
    countries && (
      <section className="mainFather">
        <Search />
        <ul className="photosHomeList">
          {countries?.map((country, id) => (
            <li key={id} className="photoLi">
              <section
                className="photoFather"
                onClick={(e) => handleClick(e, country)}
              >
                <h3>{country.name.common}</h3>
                <PhotoCard country={country} APIKEY={APIKEY} />
              </section>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};
