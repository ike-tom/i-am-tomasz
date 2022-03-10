import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../styles/imagestyles.css';

const IndexMainPage = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
  margin: 0;
  padding: 0;
  font-family: 'Press Start', sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-family: 'PacFont', sans-serif;
  padding-top: 2rem;
  line-height: 135%;
`;
const Paragraph = styled.p`
  font-size: 0.8rem;
`;
const Navigation = styled.nav`
  font-size: 1.8rem;
`;
const NavigationItem = styled.li`
  list-style-type: none;
  padding: 1rem 0;
`;
const NavigationList = styled.ul`
  padding: 0;  
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f6eb14;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;

const Mode = (props) => (
  <NavigationItem>
    <StyledLink to={props.page}>{props.pageName}</StyledLink>
  </NavigationItem>
);

const IndexPage = () => {
  return (
    <Layout title="Index Page" metaDescription="">
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

Mode.propTypes = {
  page: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired
};

export default IndexPage;
