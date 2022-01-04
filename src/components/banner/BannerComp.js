import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BiSearch, ImFacebook, SiInstagram, SiTwitter} from "react-icons/all";

import './BannerComp.scss';
import {bannerData} from "../../configs/bannerData";

const BannerComp = () => {
  return (
    <Container fluid className="banner-comp d-flex justify-content-center align-items-center">
      <div className="comp-bg-blur"/>
      <Container className="banner-comp-container">
        <Row className="banner-comp-header">
          <Col xl={6} lg={7} md={12} sm={12} className="banner-comp-left-side">
            <div className="banner-title">
              <h1 className="title">WELCOME TO<br/> THE BABBLING<br/> BABOON CLUB!</h1>
            </div>
          </Col>
          <Col xl={6} lg={5} md={12} sm={12}
               className="banner-comp-right-side d-flex justify-content-center align-items-center">
            <div className="banner-search d-flex justify-content-center align-items-center">
              <BiSearch className="search-icon"/>
              <input type="text" placeholder="Search" className="search-input"/>
            </div>
          </Col>
        </Row>
        <Row className="banner-comp-content">
          <Col className="banner-comp-left-side">
            <div className="banner-content">
              <div className="banner-social d-flex justify-content-evenly align-items-center">
                <SiInstagram className="social-item"/>
                <ImFacebook className="social-item"/>
                <SiTwitter className="social-item"/>
              </div>
              <div className="banner-desc">
                <p className="desc-item">NFT Community fo all red bottom lovers</p>
                <p className="desc-item">A collection of 2,222 of the most Babbling Baboons</p>
                <p className="desc-item">Mint cost will be 0.04 eth + gas</p>
              </div>
            </div>
          </Col>
          <Col className="banner-comp-right-side">
            <div className="page-menu">
              <ul className="menu-item d-flex flex-column justify-content-center align-items-end">
                {
                  bannerData.map((val, index) => (
                    <a className="item" href={val.path}>
                      <li>{val.label}</li>
                    </a>
                  ))
                }
              </ul>
            </div>
            <div className="comp-primary-btn banner-btn">
              <span className="mas">JOIN US</span>
              <button className="btn-item">JOIN US</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BannerComp;