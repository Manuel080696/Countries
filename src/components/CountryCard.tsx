import { useContext } from "react";
import "../styles/CountryCard.css";
import { CountryContext } from "../context/CountryContext";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export const CountryCard = () => {
  const { country } = useContext(CountryContext);

  const currencyCode = Object.keys(country.currencies)[0];
  const currencyName = country.currencies[currencyCode].name;
  const currencySymbol = country.currencies[currencyCode].symbol;

  const languagesCode = Object.keys(country.languages)[0];
  const language = country.languages[languagesCode];

  return (
    <section className="countryCard">
      <h2>{country.name.common}</h2>
      <img src="/logoMail.png" className="logoMail" />
      <img src="/logoAirMail.png" className="logoAirMail" />
      <span className="main">
        <section className="map">
          <div id="map">
            <MapContainer
              center={country.latlng}
              zoom={5}
              scrollWheelZoom={false}
              className="mapObject"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={country.latlng}></Marker>
            </MapContainer>
          </div>
        </section>
        <section className="data">
          <img src={country.flags.png} />

          <ul>
            <li>
              <p>
                <strong>Official name:</strong> {country.name.official}
              </p>
            </li>
            <li>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </li>
            <li>
              <p>
                <strong>Money:</strong> {currencyName} {currencySymbol}
              </p>
            </li>
            <li>
              {" "}
              <p>
                <strong>Region:</strong> {country.region}
              </p>
            </li>
            <li>
              <p>
                <strong>Languages:</strong> {language}
              </p>
            </li>
            <li>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
            </li>
            <li>
              <p>
                <strong>Time Zone:</strong> {country.timezones}
              </p>
            </li>
            <li>
              <p>
                <strong>Continent:</strong> {country.continents}
              </p>
            </li>
          </ul>
        </section>
      </span>
    </section>
  );
};
