import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactMainPage = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
  font-family: 'Press Start', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const ContactHeader = styled.h1`
  margin: 0;
  font-size: 3rem;
  padding-top: 3rem;
`;
const ContactDescription = styled.p`
  font-size: 1.1rem;
`;

const Navigation = styled.nav`
  margin: 0 5%;
  padding: 3rem 0 3.5rem 0;
`;

const NavigationList = styled.ul`
  padding: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

const NavigationItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  &:hover {
    animation: pulsation 0.9s infinite both linear;
  }
`;
const ExternalSiteLink = styled.a`
  color: #f6eb14;
`;
const ReturnToMainPage = styled(Link)`
  text-decoration: none;
  color: #f6eb14;
  height: 15%;
  margin-left: 6%;
  text-align: left;
  margin-bottom: 5%;
  flex-grow: 0;
  display: block;
  width: fit-content;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 160px;
  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

const ContactOption = (props) => (
  <NavigationItem>
    <ExternalSiteLink href={props.href} target="_blank" rel="noreferrer">
      <Icon icon={props.icon} />
    </ExternalSiteLink>
  </NavigationItem>
);

const ContactPage = () => {
  return (
    <Layout title="Contact Me" metaDescription="">
      <ContactMainPage>
        <ContactHeader>GET IN TOUCH</ContactHeader>
        <ContactDescription>PLEASE CONTACT ME AT</ContactDescription>
        <Navigation>
          <NavigationList>
            <ContactOption
              href="mailto:tomasz.ikert.frontend@gmail.com"
              icon={faEnvelope}></ContactOption>
            <ContactOption href="https://github.com/ike-tom" icon={faGithub}></ContactOption>
            <ContactOption
              href="https://www.linkedin.com/in/tomaszikert/"
              icon={faLinkedin}></ContactOption>
          </NavigationList>
        </Navigation>

        <ReturnToMainPage to="/">BACK</ReturnToMainPage>
      </ContactMainPage>
    </Layout>
  );
};

ContactOption.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
  // size: PropTypes.string.isRequired
};

export default ContactPage;
