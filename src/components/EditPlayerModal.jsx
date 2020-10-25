import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

const EditPlayerModal = ({ show, player, save , onClose}) => {
  const [firstName, setFirstName] = useState(player.firstName);
  const [lastName, setLastName] = useState(player.lastName);
  const [email, setEmail] = useState(player.email);


  const handleSave = () => {
      save({
          firstName: firstName,
          lastName: lastName,
          emeil: email
      });    
  };    

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
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{player ? "Edit" : "Add"} Player</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            <FaSave /> Save changes
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPlayerModal;
