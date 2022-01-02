import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {aboutData} from "../../configs/aboutData";

import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Container fluid className="about-comp comp-with-leaf">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top d-flex justify-content-center align-items-center"/>
      <Container className="about-comp-container">
        <Row className="about-comp-title d-flex justify-content-center align-items-center">
          <div className="comp-title">
            <h6 className="title">ABOUT</h6>
          </div>
        </Row>
        <Row className="about-comp-content">
          {
            aboutData.map((val, key) => (
              <Col xl={6} ld={6} md={6} sm={12} key={key} className="item d-flex flex-column align-items-center">
                <div className="item-img">
                  <div className="img-border d-flex justify-content-center align-items-center">
                    <img src={val.img} alt="baboon-about-img"/>
                  </div>
                </div>
                <div className="item-content">
                  {
                    val.content.map((item, index) => (
                      <p key={index} className="content">{item}</p>
                    ))
                  }
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default AboutComp;