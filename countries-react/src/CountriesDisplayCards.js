import React from "react";
import countriesAll from "./countriesAll.json";
import ContainerCard from "./ContainerCard";
import "./CountriesDisplayCards.css"
const CountriesDisplayCards = () => {
  return (
    <div className="countryDCardsContainer">
      {countriesAll.map((element, index) => {
        return <ContainerCard key={index} country={element} />;
      })}
    </div>
  );
};


export default CountriesDisplayCards;
