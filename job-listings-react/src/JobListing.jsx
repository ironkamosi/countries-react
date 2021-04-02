import JobDisplay from "./JobDisplay.jsx"
const JobListing = (props) => {
    return <div>
        {props.jobListingData.map((data, index) => {
            return (
                <JobDisplay jobInfo={data}/>
          )
      })}
  </div>;
};
export default JobListing;
