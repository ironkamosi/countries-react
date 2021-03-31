import { Card } from "react-bootstrap"
import "./ContainerCard.css"
const ContainerCard = (props) => {
  return (
    <Card className="containerCard">
      <Card.Img
        variant="top"
        src={props.country.flag}
        alt={props.country.name}
      />
      <Card.Body>
        <Card.Title>Country: {props.country.name}</Card.Title>
        <Card.Text> Population: {props.country.population}</Card.Text>
        <Card.Text> Region: {props.country.region}</Card.Text>
        <Card.Text> Capital: {props.country.capital}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ContainerCard