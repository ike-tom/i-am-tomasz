import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AboutMainPage = styled.main`
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 6% repeat(2, 1fr) repeat(2, 1.5fr);
  grid-template-rows: 1fr 3fr 15%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 768px) {
    grid-template-columns: 5% 1fr 5%;
    grid-template-rows: 21.25vh 63.75vh 100vh 10vh;
    height: auto;
  }
`;

const AboutHeader = styled.h1`
  margin: 0;
  font-size: 3rem;
  padding-top: 3rem;
  grid-area: 1 / 2 / 2 / 4;
  @media (max-width: 768px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

const AboutDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutDescriptionContainer = styled.div`
  padding-bottom: 1.5rem;
  grid-area: 2 / 2 / 3 / 4;
  align-self: center;
  @media (max-width: 768px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

const AboutPhotoContainer = styled.div`
  grid-area: 1 / 4 / 4 / 6;
  @media (max-width: 768px) {
    grid-area: 3 / 1 / 4 / 4;
  }
`;

const photo = {
  height: '100%',
  objectFit: 'contain'
};

const ReturnToMainPage = styled(Link)`
  text-decoration: none;
  color: #f6eb14;
  grid-area: 3 / 2 / 4 / 3;
  width: fit-content;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
  @media (max-width: 768px) {
    grid-area: 4 / 2 / 5 / 3;
    padding-top: 1rem;
  }
`;

const AboutPage = () => {
  return (
    <Layout
      title="Who am I?"
      metaDescription="I am Tomasz. Read more about me - an ambitious JavaScript Developer.">
      <AboutMainPage>
        <AboutHeader>WHO AM I</AboutHeader>
        <AboutDescriptionContainer>
          <AboutDescription>
            Hello, my name is Tomasz Ikert. I am hardworking, conscientious, and never give up.
          </AboutDescription>
          <AboutDescription>
            I love trying new things, so I started learning programming in June 2020. I have a
            scientific mind, so I got bitten by the bug.
          </AboutDescription>
          <AboutDescription>
            I know React, JavaScript, CSS (Less), HTML, Jira, Trello, Asana, RWD, BEM.
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
