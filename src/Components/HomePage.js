import React from "react";
import { Filters } from "./Filters";
import { Row, Col, Container } from "react-bootstrap";
import { DisplaySpacex } from "./DisplaySpacex";
export const HomePage = () => {
  return (
    <Container fluid style={{ backgroundColor: "#d9d9d9" }}>
      <Row>
        <h1>SpaceX Launch Programs</h1>
      </Row>
      <Row>
        <Col sm="12" md="3" style={{ backgroundColor: "white" }}>
          <Filters />
        </Col>
        <Col sm="12" md="9">
          <DisplaySpacex />
        </Col>
      </Row>
    </Container>
  );
};
