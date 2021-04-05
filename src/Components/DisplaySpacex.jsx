import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
export const DisplaySpacex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.spaceXdata.com/v3/launches?limit=${100}`
      );
      res.json().then(res => setData(res));
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        {data.map(i => (
          <Col key={i.flight_number} sm={12} md={3} lg={3}>
            <Card style={{ width: "16rem", padding: "20px", margin: "10px" }}>
              <Card.Img
                style={{ backgroundColor: "#d9d9d9" }}
                variant="top"
                src={i.links.mission_patch_small}
              />
              <Card.Body>
                <Card.Title>
                  {i.mission_name} #{i.flight_number}
                </Card.Title>
                <Card.Text>
                  <ul>
                    Mission ids
                    {i.mission_id.forEach(id => (
                      <li>{id}</li>
                    ))}
                  </ul>
                  <p>Launch Year : {i.launch_year}</p>
                  <p>
                    Successful Launch :{" "}
                    {i.rocket.first_stage.cores.land_success}
                  </p>
                  <p>Successful Landing : {i.launch_success}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
