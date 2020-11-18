import React from "react";
import "./Header.css";
import EvoxLogo from "../media/logo.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <img src={EvoxLogo} alt="Evox Logo" />
          </Col>

          <Col md={6} className="d-flex justify-content-end">
            <Navigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
