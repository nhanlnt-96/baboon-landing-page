import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CollectionComp from "../collection/CollectionComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import FAQSComp from "../faqs/FAQComp";

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
      <Row>
        <RoadmapComp/>
      </Row>
      <Row>
        <FAQSComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;