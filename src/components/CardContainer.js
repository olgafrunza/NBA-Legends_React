import React, { useState } from "react";
import { Card } from "react-bootstrap";

function CardContainer({ name, img, statistics }) {
  const [showImage, setShowImage] = useState(true);

  return (
    <Card
      className="player-card m-auto"
      onClick={() => setShowImage(!showImage)}
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-image" />
      ) : (
        <ul className="m-auto">
          {statistics.map((stat) => {
            return <li className="h5 text-start list-unstyled">🏀 {stat}</li>;
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default CardContainer;
