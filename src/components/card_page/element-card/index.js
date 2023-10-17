import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./element-card.css";

const ElementCard = ({ img, name, gender, birth_year, id }) => {
  return (
    <Card className="element-card">
      <Card.Img
        variant="top"
        src={img}
        alt=""
      />
      <Card.Body>
        <Card.Title>People info</Card.Title>
        <ul>
          <li>Name: {name}</li>
          <li>Gender: {gender}</li>
          <li>Date of birth: {birth_year}</li>
        </ul>
        <Button variant="primary">Detailed</Button>
      </Card.Body>
    </Card>
  );
};

export default ElementCard;
