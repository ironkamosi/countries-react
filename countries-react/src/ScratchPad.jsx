// import React from "react";
// import { NavDropdown } from "react-bootstrap";

// const FilterMenu = (props) => {
//   // function sendFilterText(event) {
//   //   props.onChange(event.target.value); // when you type in the search box the event is fired and sent to the main component
//   // }
//   return (
//     <select
//       // title="Filter by Region"
//       id="basic-nav-dropdown"
//       onChange={props.onChange}
//     >
//       <option value="">All Regions</option>

//       {props.regions.map((regionName, index) => {
//         return (
//           // we add index + 2 to make the href dynamic so that each option has its own href
//           <option key={index} value={regionName}>
//             {regionName}
//           </option>
//         );
//       })}
//       {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
//     </select>
//   );
// };

// export default FilterMenu;




// import React from "react";
// import { NavDropdown } from "react-bootstrap";

// const FilterMenu = (props) => {
//   // function sendFilterText(event) {
//   //   props.onChange(event.target.value); // when you type in the search box the event is fired and sent to the main component
//   // }
//   return (
//     <NavDropdown
//       title="Filter by Region"
//       id="basic-nav-dropdown"
//       onChange={props.onChange}
//     >
//       <NavDropdown.Item href="#action/3.1">All Regions</NavDropdown.Item>

//       {props.regions.map((regionName, index) => {
//         return (
//           // we add index + 2 to make the href dynamic so that each option has its own href
//           <NavDropdown.Item key={index} href={`#action/3.${index + 2}`}>
//             {regionName}
//           </NavDropdown.Item>
//         );
//       })}
//       {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
//     </NavDropdown>
//   );
// };

// export default FilterMenu;
