import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CollectionComp from "../collection/CollectionComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import FAQSComp from "../faqs/FAQComp";
import TeamComp from "../team/TeamComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout-comp">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="collection">
        <CollectionComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faqs">
        <FAQSComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;