import React from "react";
import {Container, Row} from "react-bootstrap";

import "./CollectionComp.scss";
import {collectionImgData} from "../../configs/collectionImgData";
import SliderComp from "../slider/SliderComp";
import TitleComp from "../title/TitleComp";

const CollectionComp = () => {
  return (
    <Container fluid className="collection-comp comp-with-leaf">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top"/>
      <Container className="collection-comp-container">
        <TitleComp title={"collection"}/>
        <Row className="collection-comp-content d-flex justify-content-center align-items-center">
          {/*<div className="collection-items">*/}
          {/*  {*/}
          {/*    collectionImgData.map((val, index) => (*/}
          {/*      <img data-aos="zoom-in" src={val} alt="baboon-collections"/>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</div>*/}
          <SliderComp slideImages={collectionImgData}/>
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default CollectionComp;