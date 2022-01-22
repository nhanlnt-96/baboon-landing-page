import React from "react";
import {Container} from "react-bootstrap";

import "./TitleComp.scss";

const TitleComp = ({title}) => {
  return (
    <Container className="title-comp d-flex justify-content-center align-items-center" fluid>
      <div data-aos="fade-down" className="title-comp-container">
        <h6 className="title">{title}</h6>
      </div>
    </Container>
  );
};

export default TitleComp;