// index.js
import React from "react";
import {
  Section,
  Header,
  Title,
  Subtitle,
  Footer,
  Button,
  Image,
  Image1,
  Image2,
  Image3,
  VideoContainer,
  Video,
} from "./styled";
import { HeroSectionEnum } from "./constants";
import imagePrincipal from "../../images/images_nala/image1.png";
import imagePrincipal2 from "../../images/images_nala/image2.png";
import imagePrincipal3 from "../../images/images_nala/image3.png";
import imagePrincipal4 from "../../images/images_nala/image4.png";

const HeroSection = () => {
  const { TITLE, SUB_TITLE, BUTTON } = HeroSectionEnum;

  return (
    <Section id="home" data-header-color="white">
      <Header>
        <Title>{TITLE}</Title>
        <Subtitle>{SUB_TITLE}</Subtitle>

        <Image id="image" src={imagePrincipal} alt="imagePrincipal" />
        <Image1 id="image1" src={imagePrincipal2} alt="imagePrincipal1" />
        <Image2 id="image2" src={imagePrincipal3} alt="imagePrincipal2" />
        <Image3 id="image3" src={imagePrincipal4} alt="imagePrincipal3" />

        <Footer>
          <Button href="#">{BUTTON}</Button>
        </Footer>
      </Header>

      <VideoContainer>
        <Video autoplay muted loop src="/nalaCataVideo.webm"></Video>
      </VideoContainer>
    </Section>
  );
};

export default HeroSection;
