import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/layout';
import styled from 'styled-components';

const ErrorMainPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const ErrorHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 64;
`;

const ReturnToMainPage = styled(Link)`
  height: 15%;
  width: fit-content;
  margin-bottom: 5%;
  color: #f6eb14;
  text-align: center;
  text-decoration: none;
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
        <ErrorHeader>
          Ooops...
          <br />
          Something went wrong
        </ErrorHeader>
        <ReturnToMainPage to="/">BACK</ReturnToMainPage>
      </ErrorMainPage>
    </Layout>
  );
};

export default NotFoundPage;
