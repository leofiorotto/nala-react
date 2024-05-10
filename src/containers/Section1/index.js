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
import { SectionOneEnum } from "./constants";

// Desestructuración de las constantes
const { TITLE, SUB_TITLE, BUTTON_1, BUTTON_2 } = SectionOneEnum;

const SectionOne = () => {
  return (
    <Section id="section1" data-header-color="black">
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
        <Image src="/foto1.avif" alt="Model Y" />
      </ImageWrapper>
    </Section>
  );
};

export default SectionOne;
