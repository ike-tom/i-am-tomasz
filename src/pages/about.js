import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AboutMainPage = styled.main`
  min-width: 100vw;
  background-color: black;
  font-family: 'Press Start', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  min-height: 100vh;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const AboutHeader = styled.h1`
  margin: 0;
  font-size: 3rem;
  padding-top: 3rem;
  flex-grow: 0;
`;

const AboutDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const AboutInfoContainer = styled.div`
  width: 40%;
  padding-left: 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
  }
`;

const AboutPhotoContainer = styled.div`
  width: 60%;
  position: relative;
  height: 100%;
`;

const photo = {
  position: 'absolute',
  bottom: '0',
  right: '0',

  height: '100%',
  width: '90%',
  objectFit: 'contain'
};

const ReturnToMainPage = styled(Link)`
  text-decoration: none;
  color: #f6eb14;
  height: 15%;
  text-align: left;
  flex-grow: 0;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;

const AboutPage = () => {
  return (
    <Layout title="About" metaDescription="">
      <AboutMainPage>
        <AboutInfoContainer>
          <AboutHeader>WHO AM I</AboutHeader>
          <div>
            <AboutDescription>
              Hello, my name is Tomasz Ikert. I am hardworking, conscientious, and never give up.
            </AboutDescription>
            <AboutDescription>
              I love trying new things, so I started learning programming in June 2020. I have a
              scientific mind, so I got bitten by the bug.
            </AboutDescription>
            <AboutDescription>
              My tech stack is React, JavaScript, CSS (Less), HTML, RWD, BEM.
            </AboutDescription>
            <AboutDescription>
              I am currently looking for a job as a Junior Front End Developer.
            </AboutDescription>
            <AboutDescription>
              I read biographies, watch the NFL and motorsports, and ride a bike in my spare time.
            </AboutDescription>
          </div>
          <ReturnToMainPage to="/">BACK</ReturnToMainPage>
        </AboutInfoContainer>
        <AboutPhotoContainer>
          <StaticImage style={photo} src="../assets/images/me.webp" alt="Photo of Tomasz Ikert" />
        </AboutPhotoContainer>
      </AboutMainPage>
    </Layout>
  );
};

export default AboutPage;
