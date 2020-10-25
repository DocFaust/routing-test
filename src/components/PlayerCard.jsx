import React ,{useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./PlayerCard.css";

const PlayerCard = ({ player , save}) => {
  const [firstName, setFirstName] = useState(player.firstName);
  const [lastName, setLastName] = useState(player.lastName);
  const [email, setEmail] = useState(player.email);
  const changeHandler = (evt) => {
    console.log(evt.target.id);
    console.log(evt.target.value);

    switch (evt.target.id) {
      case "first":
        setFirstName(evt.target.value);
        break;

      case "last":
        setLastName(evt.target.value);
        break;
      case "email":
        setEmail(evt.target.value);
        break;
      default:
        console.log("unknown Field: " + evt.target.id);
        break;
    }
  };

  return (
    <Card style={{ width: "18rem" }} className="mb-1">
      <Card.Body>
        <Card.Title>{player.id}</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group controlId="first">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="last">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="emil"
                placeholder="Enter Email Address"
                value={email}
                onChange={changeHandler}
              />
            </Form.Group>
          </Form>
        </Card.Text>
        <Button variant="primary">Save</Button>
      </Card.Body>
    </Card>
  );
};
export default PlayerCard;
