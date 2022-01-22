import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BiSearch, SiDiscord, SiInstagram, SiTwitter} from "react-icons/all";
import {bannerData} from "../../configs/bannerData";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/data/dataActions";
import * as s from "../../styles/globalStyles";
import {connect} from "../../redux/blockchain/blockchainActions";
import {ResponsiveWrapper, StyledButton, StyledLink, StyledRoundButton, truncate} from "./styleComponent";
import {notification} from 'antd';

import './BannerComp.scss';

const BannerComp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  
  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };
  
  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  
  useEffect(() => {
    getConfig();
  }, []);
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <Container fluid className="banner-comp d-flex justify-content-center align-items-center">
      <div className="comp-bg-blur"/>
      <Container className="banner-comp-container">
        {/*{*/}
        {/*  blockchain.errorMsg && notification.info({*/}
        {/*    message: `Error`,*/}
        {/*    description: blockchain.errorMsg,*/}
        {/*    placement: 'bottomRight',*/}
        {/*  })*/}
        {/*}*/}
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
                <a data-aos="zoom-in" className="social-item" href="https://discord.gg/YADkczCU"><SiDiscord/></a>
                <a data-aos="zoom-in" className="social-item" href="https://twitter.com/BaboonClubNFT"><SiTwitter/></a>
              </div>
              <div data-aos="fade-up" className="banner-desc">
                <p className="desc-item">NFT Community fo all red bottom lovers</p>
                <p className="desc-item">A collection of 2,222 of the most BABBLING BABOONS</p>
                <p className="desc-item">Mint cost will be 0.04 eth + gas</p>
              </div>
            </div>
          </Col>
          <Col className="banner-comp-right-side">
            {
              !blockchain.account && (
                <div data-aos="zoom-in" className="comp-primary-btn banner-btn">
                  <span className="mas">CONNECT WALLET</span>
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }} className="btn-item">JOIN US
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
                <ResponsiveWrapper data-aos="zoon-in" className="mint-box" data-aos="zoom-in" flex={1}
                                   style={{padding: 24}} test>
                  <s.Container
                    flex={2}
                    jc={"center"}
                    ai={"center"}
                    style={{
                      backgroundColor: "rgba(0,0,0,.4)",
                      padding: 24,
                      borderRadius: 24,
                    }}
                  >
                    <s.TextTitle
                      style={{
                        textAlign: "center",
                        fontSize: 50,
                        fontWeight: "bold",
                        color: "var(--accent-text)",
                      }}
                    >
                      {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                    </s.TextTitle>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--primary-text)",
                      }}
                    >
                      <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                        {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                      </StyledLink>
                    </s.TextDescription>
                    <s.SpacerSmall/>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <s.TextTitle
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          The sale has ended.
                        </s.TextTitle>
                        <s.TextDescription
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </s.TextDescription>
                        <s.SpacerSmall/>
                        <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </StyledLink>
                      </>
                    ) : (
                      <>
                        <s.TextTitle
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                          {CONFIG.NETWORK.SYMBOL}.
                        </s.TextTitle>
                        <s.SpacerXSmall/>
                        <s.TextDescription
                          style={{textAlign: "center", color: "var(--accent-text)"}}
                        >
                          Excluding gas fees.
                        </s.TextDescription>
                        <s.SpacerSmall/>
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <s.Container ai={"center"} jc={"center"}>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              Connect to the {CONFIG.NETWORK.NAME} network
                            </s.TextDescription>
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <s.SpacerSmall/>
                                <s.TextDescription
                                  style={{
                                    textAlign: "center",
                                    color: "var(--accent-text)",
                                  }}
                                >
                                  {blockchain.errorMsg}
                                </s.TextDescription>
                              </>
                            ) : null}
                          </s.Container>
                        ) : (
                          <>
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              {feedback}
                            </s.TextDescription>
                            <s.SpacerMedium/>
                            <s.Container ai={"center"} jc={"center"} fd={"row"}>
                              <StyledRoundButton
                                style={{lineHeight: 0.4}}
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                -
                              </StyledRoundButton>
                              <s.SpacerMedium/>
                              <s.TextDescription
                                style={{
                                  textAlign: "center",
                                  color: "var(--accent-text)",
                                }}
                              >
                                {mintAmount}
                              </s.TextDescription>
                              <s.SpacerMedium/>
                              <StyledRoundButton
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                +
                              </StyledRoundButton>
                            </s.Container>
                            <s.SpacerSmall/>
                            <s.Container ai={"center"} jc={"center"} fd={"row"}>
                              <StyledButton
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                              >
                                {claimingNft ? "BUSY" : "BUY"}
                              </StyledButton>
                            </s.Container>
                          </>
                        )}
                      </>
                    )}
                  </s.Container>
                </ResponsiveWrapper>
              </div>
            </Row>
          )
        }
      </Container>
    </Container>
  );
};

export default BannerComp;