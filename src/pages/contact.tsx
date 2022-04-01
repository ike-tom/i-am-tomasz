import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ContactOptionProps {
  href: string;
  icon: IconDefinition;
}

const ContactMainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100vw;
  min-height: 100vh;
  text-align: center;
`;

const ContactHeader = styled.h1`
  margin: 0;
  padding-top: 3rem;
  font-size: 3rem;
`;
const ContactDescription = styled.p`
  font-size: 1.1rem;
`;

const Navigation = styled.nav`
  margin: 0 5%;
  padding: 3rem 0 3.5rem 0;
`;

const NavigationList = styled.ul`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 0;
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
  height: 15%;
  width: fit-content;
  margin-left: 6%;
  margin-bottom: 5%;
  color: #f6eb14;
  text-align: left;
  text-decoration: none;
  flex-grow: 0;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 80px;
  @media only screen and (min-device-width: 768px) {
    font-size: 160px;
  }
`;

const ContactOption = (props: ContactOptionProps) => (
  <NavigationItem>
    <ExternalSiteLink href={props.href} target="_blank" rel="noreferrer">
      <Icon icon={props.icon} />
    </ExternalSiteLink>
  </NavigationItem>
);

const ContactPage = () => {
  return (
    <Layout title="Contact Me" metaDescription="Here's more info on how to contact me...">
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

export default ContactPage;
