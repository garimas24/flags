import { useState, useEffect } from "react";
// import App from "./App.js";

const CountryCard = ({ name, flagImg, flagAltText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        gap: "5px",
      }}
    >
      <img
        src={flagImg}
        alt={flagAltText}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const APIURL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country) => (
        <CountryCard
          key={country.abbr}
          name={country.name}
          flagImg={country.flag}
          flagAltText={country.abbr}
        />
      ))}
    </div>
  );
}

export default Countries;
