import JobDisplay from "./JobDisplay.jsx";
const JobLanguages = (props) => {
  return props.JobDisplay.jobInfo.map((language, index));
};
export default JobLanguages;
