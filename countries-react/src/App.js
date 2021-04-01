import React, { useState } from "react";
import "./App.css";
import CountriesDisplayCards from "./CountriesDisplayCards.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar.jsx";
import countriesAll from "./countriesAll.json";

function App() {
  const [searchInputText, setSearchInputText] = useState(""); 
  const [regionFilterText, setRegionFilterText] = useState("all regions");

  //this is an on keyUp event handler for the search input box  
  function searchCountries(event) { 
    let searchString = event.target.value.toLowerCase();
    setSearchInputText(searchString);
  }

//this is an on change event Handler for the region drop down menu
  function filterCountriesByRegion(event) {
    const regionName = event.target.value;
    setRegionFilterText(regionName);
  }

  // this is an array to store region names
  let regionNames = [];
  countriesAll.forEach((countryData) => {
    // this statement means if the region does not exist in the array then...
    if (!regionNames.includes(countryData.region)) {
      regionNames.push(countryData.region);
    }
  });

  //this is an array to store found countryNames (data = entire data of countries)
  //process starts at ln 34 - 51
  let foundCountryNames = []; // (regionally) global variable that works with the search and the filter 

  // this loop is for the search function for the search box
  countriesAll.forEach((countryName) => {
    if (
      countryName.name.toLowerCase().includes(searchInputText) ||
      countryName.capital.toLowerCase().includes(searchInputText)
    )
      foundCountryNames.push(countryName);
  });

// this filters on countries based on region name
  foundCountryNames = foundCountryNames.filter((country) => {
    if (regionFilterText === "all regions") {
      return true;
    } else {
      return country.region === regionFilterText;
    }
  });

  return (
    <div>
      <SearchBar
        regions={regionNames} // names of regions
        onKeyUp={searchCountries} // filter 
        onChange={filterCountriesByRegion} 
      />
      <CountriesDisplayCards filteredCountriesData={foundCountryNames} />
    </div>
  );
}

export default App;
// setting countriesDisplay card with the filtered from the search ie foundCountryName
