import React,{useState} from "react"
import './App.css';
import data from "./data.json"
import JobListing from "./JobListing.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [jobData, setJobData] = useState(data)
  
  return (
    <div>
      <JobListing jobListingData={jobData} />
    </div>
  );
}

export default App;
