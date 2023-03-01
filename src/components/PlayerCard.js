import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import CardContainer from "./CardContainer";
import { data } from "../helper/data";

function PlayerCard() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        aria-label="Search"
        aria-describedby="search-player"
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="player-cards rounded-4 my-4 p-3 bg-light">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((player) => {
              return (
                <Col sm={6} lg={4} xl={3}>
                  <CardContainer {...player} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default PlayerCard;
