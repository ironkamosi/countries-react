import React from "react";

const CountryDisplayCard = (props) => {
  return (
    <div className="countryDisplayCard">
      <img src={props.country.flag} alt={props.country.name} />
      <h2>Country:{props.country.name}</h2>
      <p>Population:{props.country.population}</p>
      <p>Region:{props.country.region}</p>
      <p>Capital:{props.country.capital}</p>
    </div>
  

    
    
    
  );
};




export default CountryDisplayCard;
