import React from 'react';
import {Container, Row} from "react-bootstrap";
import {faqsData} from "../../configs/faqsData";

import './FAQComp.scss';

const FAQComp = () => {
  return (
    <Container fluid className="faqs-comp comp-with-leaf">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top"/>
      <Container className="faqs-comp-container">
        <Row className="faqs-comp-title d-flex justify-content-center align-items-center">
          <div className="comp-title">
            <h6 className="title">FAQ</h6>
          </div>
        </Row>
        <Row className="faqs-comp-content">
          {
            faqsData.map((mainContent, index) => (
              <div key={index} className="item">
                <div className="item-question d-flex align-items-center">
                  <div className="question-content">
                    <p className="question">{mainContent.question}</p>
                  </div>
                </div>
                <div className="item-answer d-flex align-items-center justify-content-end">
                  <div className="answer-content">
                    {
                      mainContent.answer.map((answer, key) => (
                        <p key={key} className="answer">{answer}</p>
                      ))
                    }
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

export default FAQComp;