import {Badge,Media } from "react-bootstrap";

const JobDisplay = (props) => {
    console.log(props.jobInfo)
  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={props.jobInfo.logo}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{props.jobInfo.company}</h5>
        <p>{props.jobInfo.position}</p>

              <div>
                  {props.jobInfo.language.map(())}
          <Badge variant="primary">{props.jobInfo.language}</Badge>{" "}
          <Badge variant="secondary">{props.jobInfo.language}</Badge>{" "}
          <Badge variant="success">Success</Badge>{" "}
          <Badge variant="danger">Danger</Badge>{" "}
          <Badge variant="warning">Warning</Badge>{" "}
          <Badge variant="info">Info</Badge>{" "}
          <Badge variant="light">Light</Badge>{" "}
          <Badge variant="dark">Dark</Badge>
        </div>
      </Media.Body>
    </Media>
  );
};
export default JobDisplay;

//  data.map((element, index) => {
//    element.company;
//    element.logo;
//    element.new;
//    element.feature;
//    element.position;
//    element.postedAt;
//    element.language;
//  });
