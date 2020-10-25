import React from "react";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const PlayerTableRow = ({ player, editHandler }) => (
  <tr>
    <td>{player.id}</td>
    <td>{player.firstName}</td>
    <td>{player.lastName}</td>
    <td>{player.email}</td>
    <td>
      <Button variant="light" id={player.id} onClick={(e) => editHandler(e, player)}>
        <FaEdit /> Ändern
      </Button>
    </td>
  </tr>
);

export default PlayerTableRow;
