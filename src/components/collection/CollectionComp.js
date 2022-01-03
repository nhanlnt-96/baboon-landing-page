import React from 'react';
import {Container, Row} from "react-bootstrap";

import './CollectionComp.scss';
import {collectionImgData} from "../../configs/collectionImgData";

const CollectionComp = () => {
  return (
    <Container fluid className="collection-comp comp-with-leaf">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top"/>
      <Container className="collection-comp-container">
        <Row className="collection-comp-title d-flex justify-content-center align-items-center">
          <div className="comp-title">
            <h6 className="title">COLLECTION</h6>
          </div>
        </Row>
        <Row className="collection-comp-content">
          <div className="collection-items">
            {
              collectionImgData.map((val, index) => (
                <img src={val} alt="baboon-collections"/>
              ))
            }
          </div>
          <div className="collection-btn">
            <div className="comp-primary-btn">
              <span className="mas">SHOW MORE</span>
              <button className="btn-item">SHOW MORE</button>
            </div>
          </div>
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default CollectionComp;