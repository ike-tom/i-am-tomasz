import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const about__page = {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'black',
  margin: 0,
  padding: 0,
  innerHeight: '100vh',
  fontFamily: 'Press Start',
  boxSizing: 'border-box',
  display: 'flex'
};
const about__header = {
  color: '#F6EB14',
  margin: 0,
  fontSize: '3rem',
  paddingTop: '2rem'
};
const about__description = {
  color: '#F6EB14',
  fontSize: '1.1rem',
  margin: '0',
  paddingTop: '1rem'
};

const aboutInfo__container = {
  width: '40%',
  paddingLeft: '6%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  height: '100%',
  zIndex: '1'
};
const aboutPhoto__container = {
  width: '60%',
  position: 'relative',
  // bottom: "0",
  // right: "0",
  height: '100%'
};
const photo = {
  position: 'absolute',
  bottom: '0',
  right: '0',

  height: '100%',
  width: '90%',
  objectFit: 'contain'
};
const aboutDescription__container = {};
const about__returnLink = {
  textDecoration: 'none',
  color: '#F6EB14',
  position: 'absolute',

  left: '6%',
  bottom: '10%'
};
const wrapperClassName = {
  textDecoration: 'none',
  color: '#F6EB14'
};

const AboutPage = () => {
  return (
    <Layout title="About" metaDescription="">
      <main style={about__page}>
        <div style={aboutInfo__container}>
          <h1 style={about__header}>WHO AM I</h1>
          <div style={aboutDescription__container}>
            <p style={about__description}>
              Hello, my name is Tomasz Ikert. I am hardworking, conscientious, and never give up.
            </p>
            <p style={about__description}>
              I love trying new things, so I started learning programming in June 2020. I have a
              scientific mind, so I got bitten by the bug.
            </p>
            <p style={about__description}>
              My tech stack is React, JavaScript, CSS (Less), HTML, RWD, BEM.
            </p>
            <p style={about__description}>
              I am currently looking for a job as a Junior Front End Developer.
            </p>
            <p style={about__description}>
              I read biographies, watch the NFL and motorsports, and ride a bike in my spare time.
            </p>
          </div>
          <p>
            <Link style={about__returnLink} to="/">
              BACK
            </Link>
          </p>
        </div>
        <div style={aboutPhoto__container}>
          <StaticImage style={photo} src="../assets/images/me.webp" alt="Photo of Tomasz Ikert" />
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
