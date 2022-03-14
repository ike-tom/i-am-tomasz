import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import styled from 'styled-components';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};

const ErrorMainPage = styled.main`
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
  justify-content: center;
  text-align: center;
`;

const ReturnToMainPage = styled(Link)`
  text-decoration: none;
  color: #f6eb14;
  height: 15%;
  text-align: center;
  margin-bottom: 5%;

  width: fit-content;
  &:hover {
    animation: pulsation 0.7s infinite both linear;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout
      title="404 Page - Houston, we have a problem"
      metaDescription="Error Page for iamtomasz. Something went wrong.">
      <ErrorMainPage>
        <title>Houston, we have a problem</title>
        <h1 style={headingStyles}>
          Ooops...
          <br />
          Something went wrong
        </h1>
        <ReturnToMainPage to="/">BACK</ReturnToMainPage>
      </ErrorMainPage>
    </Layout>
  );
};

export default NotFoundPage;
