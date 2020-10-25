import React, { useEffect, useState } from "react";
import PlayersTable from "./PlayersTable";
import { Container, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import EditPlayerModal from "./EditPlayerModal";
import PlayerCards from "./PlayerCards";

const Players = (props) => {
  const tabledata = [
    {
      key: 1,
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      email: "mdo@test.de",
    },
    {
      key: 2,
      id: 2,
      firstName: "Werner",
      lastName: "Faust",
      email: "wfa@test.de",
    },
    {
      key: 3,
      id: 3,
      firstName: "Renate",
      lastName: "Faust",
      email: "rfa@test.de",
    },
    {
      key: 4,
      id: 4,
      firstName: "Roman",
      lastName: "Müller",
      email: "rmu@test.de",
    },
    {
      key: 5,
      id: 5,
      firstName: "Markus",
      lastName: "Pfeiffer",
      email: "mpf@test.de",
    },
    {
      key: 6,
      id: 6,
      firstName: "Anita",
      lastName: "Goldmann",
      email: "ago@test.de",
    },
    {
      key: 7,
      id: 7,
      firstName: "Matthias",
      lastName: "Matzka",
      email: "mma@test.de",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(tabledata[0]);

  const handleSave = (player) => {
    console.log(player);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const newPlayerHandler = () => {
    alert("neu");
  };

  const handleEdit = (evt, player) => {
    const id = Number(evt.target.id);
    setCurrentPlayer(tabledata[id - 1]);
    setShowModal(true);
  };

  return (
    <div>
      <h1>Spieler</h1>
      <PlayersTable tabledata={tabledata} editHandler={handleEdit} />
      <Container>
        <Button onClick={newPlayerHandler}>
          <FaPlus /> Neu
        </Button>
      </Container>

      <EditPlayerModal
        show={showModal}
        player={currentPlayer}
        save={handleSave}
        onClose={handleClose}
      />

      <PlayerCards data={tabledata}></PlayerCards>
    </div>
  );
};

export default Players;
