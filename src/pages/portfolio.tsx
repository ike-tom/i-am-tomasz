import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/imagestyles.css';

const PortfolioMainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const PortfolioHeader = styled.h1`
  margin: 0;
  padding-top: 3rem;
  font-size: 2rem;
  @media only screen and (min-device-width: 500px) {
    font-size: 3rem;
  }
`;

const ReturnToMainPage = styled(Link)`
  display: block;
  height: 15%;
  width: fit-content;
  margin-left: 6%;
  margin-bottom: 5%;
  color: #f6eb14;
  text-decoration: none;
  text-align: left;
  flex-grow: 0;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;
const ProjectsGalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
`;
const ProjectWrapper = styled.div`
  width: 70%;
  max-height: 360px;
  padding: 1rem;
  @media only screen and (min-device-width: 768px) {
    width: 30%;
  }
`;

const PortfolioPage = () => {
  return (
    <Layout title="My Portfolio" metaDescription="Examples of my Frontend projects">
      <PortfolioMainPage>
        <PortfolioHeader>PORTFOLIO</PortfolioHeader>
        <ProjectsGalleryWrapper>
          <ProjectWrapper>
            <a href="https://github.com/team-prstmw/StarWarsQuiz" target="_blank" rel="noreferrer">
              <StaticImage
                className="starWarsPhotoWrapper imageWrapper"
                src="../assets/images/swpixel.webp"
                alt="Star Wars Quiz"
              />
            </a>
          </ProjectWrapper>
          <ProjectWrapper>
            <a
              href="https://github.com/team-prstmw/HousesForSaleSearcher"
              target="_blank"
              rel="noreferrer">
              <StaticImage
                className="housesForSaleWrapper imageWrapper"
                src="../assets/images/housepixel.webp"
                alt="Houses for Sale Searcher"
              />
            </a>
          </ProjectWrapper>
          <ProjectWrapper>
            <a href="https://github.com/topics/oj-mat-api" target="_blank" rel="noreferrer">
              <StaticImage
                className="ojMatApiWrapper imageWrapper"
                src="../assets/images/bicyclepixel.webp"
                alt="OjMatApi - Father Matthew API"
              />
            </a>
          </ProjectWrapper>
          {/* <ProjectWrapper>
            <a
              href="https://github.com/ike-tom/rock-paper-scissors-lizard-spock"
              target="_blank"
              rel="noreferrer">
              <StaticImage
                className="bigBangTheoryWrapper imageWrapper"
                src="../assets/images/bbtpixel.webp"
                alt="Rock, paper, scissors, lizard, spock game"
              />
            </a>
          </ProjectWrapper> */}
          {/* <ProjectWrapper>
            <a
              href="https://github.com/ike-tom/IP-address-tracker"
              target="_blank"
              rel="noreferrer">
              <StaticImage
                className="ipTrackerWrapper imageWrapper"
                src="../assets/images/detectivepixel.webp"
                alt="IP Address Tracker"
              />
            </a>
          </ProjectWrapper> */}
          {/* <ProjectWrapper>
            <a
              href="https://github.com/ike-tom/space-tourism-multi-page-website"
              target="_blank"
              rel="noreferrer">
              <StaticImage
                className="spaceTourismWebsiteWrapper imageWrapper"
                src="../assets/images/astronautpixel.webp"
                alt="Space tourism website"
              />
            </a>
          </ProjectWrapper> */}
        </ProjectsGalleryWrapper>
        <ReturnToMainPage to="/">BACK</ReturnToMainPage>
      </PortfolioMainPage>
    </Layout>
  );
};

export default PortfolioPage;
