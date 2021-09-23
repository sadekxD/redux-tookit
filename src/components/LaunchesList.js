import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const LaunchesList = ({ data }) => {
  const { links, mission_name, details, launch_year } = data;
  return (
    <Col md={4} className="mb-5">
      <Card style={{ width: "18rem" }}>
        <Link to="">
          {" "}
          <Card.Img
            variant="top"
            src={links.mission_patch}
            style={{ height: 400 }}
          />{" "}
        </Link>
        <Card.Body>
          <Card.Title style={{ height: 140 }}>{mission_name}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{launch_year}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default LaunchesList;
