// styled.js
import styled from "styled-components";

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

export const Button = styled.a`
  background-color: gray;
  border-radius: 4px;
  font-size: small;
  font-weight: medium;
  color: white;
  padding: 8px 48px;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 15%;
  height: auto;
  left: 15%;
  top: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Image1 = styled.img`
  position: absolute;
  width: 20%;
  height: auto;
  left: 0%;
  top: 12%;
  object-fit: cover;
  object-position: center;
`;

export const Image2 = styled.img`
  position: absolute;
  width: 10%;
  height: auto;
  left: 15%;
  top: 0%;
  object-fit: cover;
  object-position: center;
`;

export const Image3 = styled.img`
  position: absolute;
  width: 15%;
  height: auto;
  left: 0%;
  top: 60%;
  object-fit: cover;
  object-position: center;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
