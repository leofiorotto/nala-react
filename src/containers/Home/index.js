import React from "react";
import LandingHeader from "../../components/Header/index";
import SectionOne from "../Section1/index";
import SectionTwo from "../Section2/index";
import SectionThree from "../Section3/index";
import HeroSection from "../Hero";
import { Layout, StyledDiv } from "./styled";

const Home = () => {
  return (
    <Layout className="layout">
      <LandingHeader />
      <StyledDiv>
        <HeroSection />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </StyledDiv>
    </Layout>
  );
};

export default Home;
