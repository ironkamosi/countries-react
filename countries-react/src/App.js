import React, { useState } from "react";
import "./App.css";
import CountriesDisplayCards from "./CountriesDisplayCards.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar.jsx";
import countriesAll from "./countriesAll.json";

function App() {
  const [searchInputText, setSearchInputText] = useState("");
  const [regionFilterText, setRegionFilterText] = useState("all regions");

  function searchCountries(event) {
    let searchString = event.target.value.toLowerCase();
    setSearchInputText(searchString);

    // event handler responds to the key down/up event
  }

  function filterCountriesByRegion(event) {
    const regionName = event.target.value;
    setRegionFilterText(regionName);
  } 

 let regionNames = [];
 countriesAll.forEach((countryData) => {
   // this statement means if the region does not exist in the array then...
   if (!regionNames.includes(countryData.region)) {
     regionNames.push(countryData.region);
   }
 });
  
  let foundCountryNames = [];
  countriesAll.forEach((countryName) => {
    // this analyses the data in the array
    if (
      countryName.name.toLowerCase().includes(searchInputText) ||
      countryName.capital.toLowerCase().includes(searchInputText)
      // countryName.region === regionFilterText
    )
      foundCountryNames.push(countryName);
  });
  foundCountryNames = foundCountryNames.filter((country) => {
    // const region = country.region;
    if (regionFilterText === "all regions") {
      return true;
    } else {
      return country.region === regionFilterText;
    }
  });

  return (
    <div>
      <SearchBar regions={regionNames} onKeyUp={searchCountries} onChange={filterCountriesByRegion} />
      <CountriesDisplayCards filteredCountriesData={foundCountryNames} />
    </div>
  );
}

export default App;
// setting countriesDisplay card with the filtered from the search ie foundCountryName
