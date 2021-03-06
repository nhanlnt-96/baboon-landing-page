import React from 'react';
import {Container, Row} from "react-bootstrap";
import {teamData} from "../../configs/teamData";
import {ImTwitter, SiDiscord, SiInstagram} from "react-icons/all";

import './TeamComp.scss';
import TitleComp from "../title/TitleComp";

const TeamComp = () => {
  return (
    <Container fluid className="team-comp comp-with-leaf comp-bg-grey">
      <div className="comp-bg-blur"/>
      <Row className="leaf-top"/>
      <Container className="team-comp-container">
        <TitleComp title={"team"}/>
        <Row className="team-comp-content">
          <div className="content-container justify-content-center align-items-center">
            {
              teamData.map((val, index) => (
                <div data-aos="fade-up"
                     className="team-detail d-flex flex-column justify-content-center align-items-center">
                  <div className="team-avatar">
                    <img src={val.avatar} alt={`team-${val.name}`}/>
                  </div>
                  <div className="team-name d-flex justify-content-center align-items-center">
                    <h6 className="name">{val.name}</h6>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="team-social d-flex justify-content-center align-items-center">
            <a href="https://www.instagram.com/babblingbaboonclub/" className="item" target="_blank"><SiInstagram/></a>
            <a href="https://discord.gg/YADkczCU" className="item" target="_blank"><SiDiscord/></a>
            <a href="https://twitter.com/BaboonClubNFT" className="item" target="_blank"><ImTwitter/></a>
          </div>
        </Row>
      </Container>
      <Row className="leaf-bottom"/>
    </Container>
  );
};

export default TeamComp;