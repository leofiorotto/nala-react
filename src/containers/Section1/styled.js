import styled from "styled-components";

// Define tus Styled Components
export const Section = styled.section`
  background-color: black;
  height: 100vh;
  width: 100vw;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const Header = styled.header`
  position: relative;
  z-index: 30;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: black;
  padding-top: 40px;
  font-size: 40px;
  font-weight: medium;
`;

export const Subtitle = styled.p`
  color: black;
  font-size: small;
`;

export const Footer = styled.footer`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Button = styled.a`
  background-color: ${(props) => (props.primary ? "gray" : "white")};
  border-radius: 4px;
  font-size: small;
  font-weight: medium;
  color: ${(props) => (props.primary ? "white" : "black")};
  padding: 8px 48px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "black" : "white")};
    color: ${(props) => (props.primary ? "white" : "black")};
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
