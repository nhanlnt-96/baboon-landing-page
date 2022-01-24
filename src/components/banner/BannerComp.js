import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {SiDiscord, SiInstagram, SiTwitter} from "react-icons/all";
import {bannerData} from "../../configs/bannerData";
import {connect} from "../../redux/blockchain/blockchainActions";
import {notification} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {MintBox} from "./component/MintBox";

import "./BannerComp.scss";
import {fetchData} from "../../redux/data/dataActions";

const BannerComp = () => {
  const blockchain = useSelector((state) => state.blockchain);
  const dispatch = useDispatch();
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  return (
    <Container fluid className="banner-comp d-flex justify-content-center align-items-center comp-bg-color">
      <div className="comp-bg-blur"/>
      <Container className="banner-comp-container">
        {
          blockchain.errorMsg && notification.info({
            message: `Error`,
            description: blockchain.errorMsg,
            placement: "bottomRight",
          })
        }
        <Row className="banner-comp-header">
          <Col data-aos="fade-up"
               data-aos-anchor-placement="bottom-bottom" xl={6} lg={7} md={12} sm={12}
               className="banner-comp-left-side">
            <div className="banner-title">
              <h1 className="title">WELCOME TO<br/> THE BABBLING<br/> BABOON CLUB!</h1>
            </div>
          </Col>
          <Col xl={6} lg={5} md={12} sm={12}
               className="banner-comp-right-side d-flex justify-content-center align-items-center">
            <div className="page-menu">
              <ul className="menu-item d-flex flex-column justify-content-center align-items-end">
                {
                  bannerData.map((val, index) => (
                    <a data-aos="fade-up" className="item" href={val.path}>
                      <li>{val.label}</li>
                    </a>
                  ))
                }
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="banner-comp-content">
          <Col className="banner-comp-left-side">
            <div className="banner-content">
              <div className="banner-social d-flex justify-content-evenly align-items-center">
                <a data-aos="zoom-in" className="social-item"
                   href="https://www.instagram.com/babblingbaboonclub/"><SiInstagram/></a>
                <a data-aos="zoom-in" className="social-item" href="https://discord.gg/cBknGt3ksN"><SiDiscord/></a>
                <a data-aos="zoom-in" className="social-item" href="https://twitter.com/BaboonClubNFT"><SiTwitter/></a>
              </div>
              <div data-aos="fade-up" className="banner-desc">
                <p className="desc-item">NFT Community fo all red bottom lovers</p>
                <p className="desc-item">A collection of 2,222 of the most Babbling Baboons</p>
                <p className="desc-item">Mint cost will be 0.04 eth + gas</p>
              </div>
            </div>
          </Col>
          <Col className="banner-comp-right-side">
            {
              !blockchain.account && (
                <div data-aos="zoom-in" className="comp-primary-btn banner-btn d-flex justify-content-center align-items-center">
                  <span className="mas">THANKS</span>
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }} className="btn-item">CONNECT WALLET
                  </button>
                </div>
              )
            }
          </Col>
        </Row>
        {
          blockchain.account && (
            <Row className="banner-comp-mint-connected d-flex justify-content-center align-items-center">
              <div className="mint-box-container">
                <MintBox getData={getData}/>
              </div>
            </Row>
          )
        }
      </Container>
    </Container>
  );
};

export default BannerComp;