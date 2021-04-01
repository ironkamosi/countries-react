import React,{useState} from "react";
import countriesAll from "./countriesAll.json"
import {Navbar, Nav, NavDropdown,Form, FormControl,Button} from "react-bootstrap"


const SearchBar = (props) => {
  // This is the input within the search bar

  let foundCountryNames = [];
  // let favouriteNames = [];
  function searchCountryData(event) {
    let searchString = event.target.value.toLowerCase();
    // event handler responds to the key down/up event
    // console.log("Search String", searchString);
    countriesAll.forEach((countryName) => {
      // this analyses the data in the array
      if (
        countryName.name.toLowerCase().includes(searchString)
      || countryName.capital.toLowerCase().includes(searchString)
      )
        foundCountryNames.push(countryName);
    });

props.setCountryName(foundCountryNames) // setting the foundCountryNames as the filtered array 


    // console.log("Found Names", foundCountryNames);

    // if (foundCountryNames) {
    //   props.setData(foundCountryNames); // sets the state with that array
    // }
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Flags of international Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" onKeyUp={searchCountryData} placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      {/* <input type="text"  /> */}
    </div>
  );
};

export default SearchBar 
