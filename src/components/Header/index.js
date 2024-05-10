import React, { useEffect, useRef } from "react";
import { Header, FlexDiv, NavList, ListItem } from "./styled";
import { LandingHeaderEnum, UrlsEnum } from "./constants";

const LandingHeader = () => {
  const headerEl = useRef(null);

  return (
    <Header ref={headerEl} id="landing-header">
      <FlexDiv>NALA</FlexDiv>

      <nav>
        <NavList>
          <ListItem>
            <a href="#home">{LandingHeaderEnum.HOME}</a>
          </ListItem>
          <ListItem>
            <a href="#section1">{LandingHeaderEnum.SECTION_1}</a>
          </ListItem>
          <ListItem>
            <a href="#section2">{LandingHeaderEnum.SECTION_2}</a>
          </ListItem>
          <ListItem>
            <a href="#section3">{LandingHeaderEnum.SECTION_3}</a>
          </ListItem>
          <ListItem>
            <a href="#contract">{LandingHeaderEnum.CONTRACT}</a>
          </ListItem>
        </NavList>
      </nav>

      <nav>
        <NavList>
          <ListItem>
            <a href={UrlsEnum.TWITTER} target="_blank" rel="noreferrer">
              {LandingHeaderEnum.TWITTER}
            </a>
          </ListItem>
          <ListItem>
            <a href={UrlsEnum.INSTAGRAM} target="_blank" rel="noreferrer">
              {LandingHeaderEnum.INSTAGRAM}
            </a>
          </ListItem>
          <ListItem>
            <a href={UrlsEnum.TELEGRAM} target="_blank" rel="noreferrer">
              {LandingHeaderEnum.TELEGRAM}
            </a>
          </ListItem>
        </NavList>
      </nav>
    </Header>
  );
};

export default LandingHeader;
