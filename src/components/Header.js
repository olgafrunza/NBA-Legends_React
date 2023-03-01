import React from "react";
import { Container, Image } from "react-bootstrap";
import nbaLogo from "../assets/nba-logo.png";

function Header() {
  return (
    <Container>
      <Image src={nbaLogo} width="200px" />
      <h1 className="my-2 display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
}

export default Header;
