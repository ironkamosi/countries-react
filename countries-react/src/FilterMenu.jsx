import React from "react";
import { NavDropdown } from "react-bootstrap";

const FilterMenu = (props) => {
 
  return (
    <select
      id="basic-nav-dropdown"
      onChange={props.onChange}
    >
      <option value="all regions">All Regions</option>

      {props.regions.map((regionName, index) => {
        return (
          // we add index + 2 to make the href dynamic so that each option has its own href
          <option key={index} value={regionName}>
            {regionName}
          </option>
        );
      })}
    </select>
  );
};

export default FilterMenu;
