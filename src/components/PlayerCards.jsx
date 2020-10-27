import React from "react";
import PlayerCard from "./PlayerCard";
import { Row, Col } from "react-bootstrap";

const PlayerCards = ({ data, editHandler }) => {
  return (
    <Row xs={1} md={2} lg={3}>
      {data.map((player) => {
        return (
            <Col>
              <PlayerCard player={player}></PlayerCard>
            </Col>
        );
      })}
    </Row>
  );
};

export default PlayerCards;
