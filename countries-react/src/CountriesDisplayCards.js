import React from "react";
// import countriesAll from "./countriesAll.json";
import ContainerCard from "./ContainerCard";
import "./CountriesDisplayCards.css"

const CountriesDisplayCards = (props) => {
  return (
    <div className="countryDCardsContainer">
      {props.filteredCountriesData.map((element, index) => {
        return <ContainerCard key={index} country={element} />;
      })}
    </div>
  );
};


export default CountriesDisplayCards;
