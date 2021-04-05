import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../cssFiles/Filter.css";
export const Filters = () => {
  const year = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];

  return (
    <>
      <h2>Filters</h2>
      <hr />
      <Row>
        {" "}
        {year.map(y => {
          return (
            <Button className="b" value={y}>
              {y}
            </Button>
          );
        })}
      </Row>
      <br />

      <h5>Success Launch</h5>
      <hr />
      <Row>
        <Button className="b">True</Button>
        <Button className="b">False</Button>
      </Row>

      <br />

      <h5>Success Land</h5>
      <hr />
      <Row>
        <Button className="b">True</Button>
        <Button className="b">False</Button>
      </Row>
    </>
  );
};
