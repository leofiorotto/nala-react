// index.js
import React from "react";
import {
  Section,
  Header,
  Title,
  Subtitle,
  Footer,
  ButtonGroup,
  Button,
  ImageWrapper,
  Image,
} from "./styled";
import { SectionThreeEnum } from "./constants";

const SectionThree = () => {
  const { TITLE, SUB_TITLE, BUTTON_1, BUTTON_2 } = SectionThreeEnum;

  return (
    <Section id="section3" data-header-color="black">
      <Header>
        <Title>{TITLE}</Title>
        <Subtitle>{SUB_TITLE}</Subtitle>

        <Footer>
          <ButtonGroup>
            <Button href="#" primary>
              {BUTTON_1}
            </Button>
            <Button href="#">{BUTTON_2}</Button>
          </ButtonGroup>
        </Footer>
      </Header>

      <ImageWrapper>
        <Image src="/foto3.avif" alt="Model Y" />
      </ImageWrapper>
    </Section>
  );
};

export default SectionThree;
