import React,{useState} from "react"
import './App.css';
import CountriesDisplayCards from "./CountriesDisplayCards.js"
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar.jsx"
import countriesAll from "./countriesAll.json"

function App() {
const [foundCountryName, setCountryName] = useState(countriesAll)
  return (
    <div>
      <SearchBar setCountryName={setCountryName} />
      <CountriesDisplayCards filteredCountriesData={foundCountryName}/>
    </div>
  )
}

export default App;
// setting countriesDisplay card with the filtered from the search ie foundCountryName