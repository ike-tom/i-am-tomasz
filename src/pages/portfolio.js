import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const PortfolioMainPage = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
  font-family: 'Press Start', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const ReturnToMainPage = styled(Link)`
  text-decoration: none;
  color: #f6eb14;
  height: 15%;
  margin-left: 6%;
  text-align: left;
  padding-bottom: 5%;
  flex-grow: 0;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;
const ProjectsGalleryWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
  perspective: 1000px;
  justify-content: center;
`;
const ProjectWrapper = styled.div`
  width: 30%;
  padding: 1rem;
  max-height: 360px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const ExternalLinkToProject = styled.a``;

const PortfolioPage = () => {
  return (
    <Layout title="Portfolio" metaDescription="">
      <PortfolioMainPage>
        <h1>PORTFOLIO</h1>
        <ProjectsGalleryWrapper>
          <ProjectWrapper>
            <div>
              <ExternalLinkToProject
                href="https://github.com/team-prstmw/StarWarsQuiz"
                target="_blank"
                rel="noreferrer">
                <StaticImage
                  className="starWarsPhotoWrapper imageWrapper"
                  imgClassName="starWarsPhoto"
                  src="../assets/images/swpixel.webp"
                  alt="Star Wars Quiz"
                />
              </ExternalLinkToProject>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <div>
              <ExternalLinkToProject
                href="https://github.com/team-prstmw/HousesForSaleSearcher"
                target="_blank"
                rel="noreferrer">
                <StaticImage
                  className="housesForSaleWrapper imageWrapper"
                  src="../assets/images/housepixel.webp"
                  alt="Houses for Sale Searcher"
                />
              </ExternalLinkToProject>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <div>
              <ExternalLinkToProject href="#" target="_blank" rel="noreferrer">
                <StaticImage
                  className="ojMatApiWrapper imageWrapper"
                  src="../assets/images/bicyclepixel.webp"
                  alt="OjMatApi - Father Matthew API"
                />
              </ExternalLinkToProject>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <div>
              <ExternalLinkToProject href="#" target="_blank" rel="noreferrer">
                <StaticImage
                  className="bigBangTheoryWrapper imageWrapper"
                  src="../assets/images/bbtpixel.webp"
                  alt="Rock, paper, scissors, lizard, spock game"
                />
              </ExternalLinkToProject>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <div>
              <ExternalLinkToProject href="#" target="_blank" rel="noreferrer">
                <StaticImage
                  className="ipTrackerWrapper imageWrapper"
                  src="../assets/images/detectivepixel.webp"
                  alt="IP Address Tracker"
                />
              </ExternalLinkToProject>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <div>
              <ExternalLinkToProject
                href="https://github.com/ike-tom/space-tourism-multi-page-website"
                target="_blank"
                rel="noreferrer">
                <StaticImage
                  className="spaceTourismWebsiteWrapper imageWrapper"
                  src="../assets/images/astronautpixel.webp"
                  alt="Space tourism website"
                />
              </ExternalLinkToProject>
            </div>
          </ProjectWrapper>
        </ProjectsGalleryWrapper>

        <ReturnToMainPage to="/">BACK</ReturnToMainPage>
      </PortfolioMainPage>
    </Layout>
  );
};

export default PortfolioPage;
