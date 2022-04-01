import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import styled from 'styled-components';

interface ModeProps {
  page: string;
  pageName: string;
}
const IndexMainPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Press Start', sans-serif;
  text-align: center;
`;
const HeaderTitle = styled.h1`
  margin: 0;
  padding-top: 2rem;
  font-size: 4rem;
  font-family: 'PacFont', sans-serif;
  line-height: 135%;
`;
const Paragraph = styled.p`
  font-size: 0.8rem;
`;
const Navigation = styled.nav`
  font-size: 1.8rem;
`;
const NavigationItem = styled.li`
  padding: 1rem 0;
  list-style-type: none;
`;
const NavigationList = styled.ul`
  padding: 0;  
  }
`;

const StyledLink = styled(Link)`
  color: #f6eb14;
  text-decoration: none;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;

const Mode = (props: ModeProps) => (
  <NavigationItem>
    <StyledLink to={props.page}>{props.pageName}</StyledLink>
  </NavigationItem>
);

const IndexPage = () => {
  return (
    <Layout
      title="Tomasz Ikert - Frontend Developer"
      metaDescription="Check out my AMAZING 8-bit portfolio website!">
      <IndexMainPage>
        <header>
          <HeaderTitle>
            Hi
            <br />I am Tomasz
          </HeaderTitle>
        </header>
        <Navigation>
          <NavigationList>
            <Mode page="/about" pageName="ABOUT"></Mode>
            <Mode page="/portfolio" pageName="PORTFOLIO"></Mode>
            <Mode page="/contact" pageName="CONTACT"></Mode>
          </NavigationList>
        </Navigation>
        <footer>
          <Paragraph>® 2022 TOMASZ IKERT</Paragraph>
          <Paragraph>ALL RIGHTS RESERVED</Paragraph>
        </footer>
      </IndexMainPage>
    </Layout>
  );
};

export default IndexPage;
