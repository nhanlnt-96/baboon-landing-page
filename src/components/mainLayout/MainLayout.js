import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CollectionComp from "../collection/CollectionComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout-comp">
      <Row>
        <BannerComp/>
      </Row>
      <Row>
        <AboutComp/>
      </Row>
      <Row>
        <CollectionComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;