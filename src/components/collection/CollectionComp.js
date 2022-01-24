import React from "react";
import {Container, Row} from "react-bootstrap";

import "./CollectionComp.scss";
import {collectionImgData} from "../../configs/collectionImgData";
import SliderComp from "../slider/SliderComp";
import TitleComp from "../title/TitleComp";

const CollectionComp = () => {
  return (
    <Container fluid className="collection-comp comp-with-leaf comp-bg-color">
      <Row className="leaf-top"/>
      <Container className="collection-comp-container">
        <TitleComp title={"collection"}/>
        <Row className="collection-comp-content d-flex justify-content-center align-items-center">
          <SliderComp slideImages={collectionImgData}/>
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default CollectionComp;