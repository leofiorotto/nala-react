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
import { SectionTwoEnum } from "./constants";

const SectionTwo = () => {
  const { TITLE, SUB_TITLE, BUTTON_1, BUTTON_2 } = SectionTwoEnum;

  return (
    <Section id="section2" data-header-color="black">
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
        <Image src="/foto2.avif" alt="Model Y" />
      </ImageWrapper>
    </Section>
  );
};

export default SectionTwo;
