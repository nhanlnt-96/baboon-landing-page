import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './RoadmapComp.scss';
import {roadmapData} from "../../configs/roadmapData";

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-with-leaf">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top"/>
      <Container className="roadmap-comp-container">
        <Row className="roadmap-comp-title d-flex justify-content-center align-items-center">
          <div className="comp-title">
            <h6 className="title">ROADMAP</h6>
          </div>
        </Row>
        <Row className="roadmap-comp-content">
          {
            roadmapData.map((mainContent, index) => (
              <div key={index}
                   className={`content-container d-flex align-items-center ${(index % 2 === 0) ? "justify-content-start" : "justify-content-end"}`}>
                <div className="item">
                  <div className="content-number d-flex justify-content-center align-items-center">
                    <div className="number-border d-flex justify-content-center align-items-center">
                      <p className="number">{mainContent.percent}</p>
                    </div>
                  </div>
                  <div className="content-desc">
                    <h6 className="question">{mainContent.question[0]}<span
                      style={{color: "#000000"}}>{mainContent.question[1]}</span>
                    </h6>
                    <div className="answer-container">
                      {
                        mainContent.answer.map((item, key) => (
                          <p key={key} className="answer">{item}</p>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default RoadmapComp;