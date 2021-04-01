import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import FilterMenu from "./FilterMenu";
import SearchBox from "./SearchBox";

const SearchBar = (props) => {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          Flags of international Countries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <FilterMenu
              onChange={props.onChange}
              regions={props.regions}
            />
          </Nav>

          <SearchBox onKeyUp={props.onKeyUp} />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SearchBar;
