import React from "react";
// import countriesAll from "./countriesAll.json";
import { Form, FormControl, Button } from "react-bootstrap";



const SearchBox = (props) => {

//     function sendInputText(event) {
//     props.onChange(event.target.value) // when you type in the search box the event is fired and sent to the main component 
    
// }
    return (
      <Form inline>
        <FormControl
          type="text"
          onKeyUp={props.onKeyUp} // the event handler for the search input box
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    );
}

export default SearchBox 