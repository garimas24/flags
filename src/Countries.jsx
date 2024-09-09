import { useState, useEffect } from "react";
// import App from "./App.js";
import TextField from "@mui/material/TextField";

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
  // const [searchTerm, setSearchTerm] = useState([]);
  // const filteredCountries = countries.filter(
  //   (country) =>
  //     country.name &&
  //     country.name.common &&
  //     country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error.message));
  }, []);
  return (
    <div className="main">
      {/* <p>Country search</p> */}
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
        {/* <List /> */}
      </div>
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
    </div>
  );
}
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for a country"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div
//         className="countryContainer"
//         style={{ display: "flex", flexWrap: "wrap" }}
//       >
//         {filteredCountries.map((country) => (
//           <CountryCard
//             key={country.cca3}
//             name={country.name.common}
//             flagImg={country.flags.png}
//             flagAltText={`Flag of ${country.name.common}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default Countries;
