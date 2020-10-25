import React from "react";
import { Table } from "react-bootstrap";
import PlayerTableRow from "./PlayerTableRow";
const PlayersTable = ({tabledata, editHandler}) => {

  return (
    <div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((player) => {
              return <PlayerTableRow key={player.key} player={player} editHandler={editHandler}/>
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayersTable;
