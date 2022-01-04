import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {aboutData} from "../../configs/aboutData";
import AboutImg1 from '../../assets/imgs/aboutImage1.png';
import AboutImg2 from '../../assets/imgs/aboutImage2.png';
import AboutImg3 from '../../assets/imgs/aboutImage3.png';
import AboutImg4 from '../../assets/imgs/aboutImage4.png';

import './AboutComp.scss';

const aboutImg = [AboutImg1, AboutImg2, AboutImg3, AboutImg4];

const AboutComp = () => {
  return (
    <Container fluid className="about-comp comp-with-leaf">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top"/>
      <Container className="about-comp-container">
        <Row className="about-comp-title d-flex justify-content-center align-items-center">
          <div className="comp-title">
            <h6 className="title">ABOUT</h6>
          </div>
        </Row>
        <Row className="about-comp-content">
          <Col xl={6} lg={7} md={7} sm={12} className="left-side d-flex justify-content-center align-items-center">
            <div className="left-side-container">
              {
                aboutData.map((val, index) => (
                  <p key={index} className="content">{val}</p>
                ))
              }
            </div>
          </Col>
          <Col xl={6} lg={5} md={5} sm={12} className="right-side d-flex justify-content-center align-items-center">
            <div className="right-side-container">
              {
                aboutImg.map((val, index) => (
                  <img key={index} src={val} alt="about-baboon"/>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default AboutComp;