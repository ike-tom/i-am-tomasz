import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AboutMainPage = styled.main`
  display: grid;
  grid-template-rows: auto auto auto 10vh;
  grid-template-columns: 5% 1fr 5%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-width: 100vw;
  height: auto;
  min-height: 100vh;
  @media only screen and (min-device-width: 768px) {
    grid-template-columns: 6% repeat(2, 1fr) repeat(2, 1.5fr);
    grid-template-rows: 1fr 3fr 15%;
    height: 100vh;
  }
`;

const AboutHeader = styled.h1`
  margin: 0;
  padding-top: 3rem;
  font-size: 2.4rem;
  grid-area: 1 / 2 / 2 / 3;
  @media only screen and (min-device-width: 768px) {
    grid-area: 1 / 2 / 2 / 4;
  }
  @media only screen and (min-device-width: 1024px) {
    font-size: 3rem;
  }
`;

const AboutDescription = styled.p`
  margin: 0;
  padding-top: 1rem;
  font-size: 1rem;
  @media only screen and (min-device-width: 768px) {
    padding-top: 2rem;
    font-size: 1.1rem;
  }
`;

const AboutDescriptionContainer = styled.div`
  padding-bottom: 1.5rem;
  align-self: center;
  grid-area: 2 / 2 / 3 / 3;
  @media only screen and (min-device-width: 768px) {
    grid-area: 2 / 2 / 3 / 4;
  }
`;

const AboutPhotoContainer = styled.div`
  grid-area: 3 / 1 / 4 / 4;
  @media only screen and (min-device-width: 768px) {
    grid-area: 1 / 4 / 4 / 6;
  }
`;

const ReturnToMainPage = styled(Link)`
  width: fit-content;
  color: #f6eb14;
  text-decoration: none;
  grid-area: 4 / 2 / 5 / 3;
  align-self: center;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
  @media only screen and (min-device-width: 768px) {
    grid-area: 3 / 2 / 4 / 3;
    align-self: top;
  }
`;

const photo = {
  height: '100%'
};

const AboutPage = () => {
  return (
    <Layout
      title="Who am I?"
      metaDescription="I am Tomasz. Read more about me - an ambitious JavaScript Developer.">
      <AboutMainPage>
        <AboutHeader>WHO AM I</AboutHeader>
        <AboutDescriptionContainer>
          <AboutDescription>
            Lazy, ineffective, and chaotic... - certainly not about me.
          </AboutDescription>
          <AboutDescription>
            My name is Tomasz Ikert. I am creative, communicative, and accurate. I love learning new
            things, so that's why I started my programming journey.
          </AboutDescription>
          <AboutDescription>
            "Nobody who ever gave his best regretted it" - that's my way of life.
          </AboutDescription>
          <AboutDescription>
            I read biographies, watch the NFL and motorsports, and ride a bike in my spare time.
          </AboutDescription>
        </AboutDescriptionContainer>
        <ReturnToMainPage to="/">BACK</ReturnToMainPage>
        <AboutPhotoContainer>
          <StaticImage style={photo} src="../assets/images/me.webp" alt="Photo of Tomasz Ikert" />
        </AboutPhotoContainer>
      </AboutMainPage>
    </Layout>
  );
};

export default AboutPage;
