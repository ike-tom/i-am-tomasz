import React from 'react';
import './layout.css';
import { Helmet } from 'react-helmet';
import PacFont from '../../assets/fonts/PacFont.woff2';
import PressStart from '../../assets/fonts/PressStart2P-Regular.woff2';

export default function Layout({ title, children, metaDescription }) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: metaDescription
          }
        ]}>
        <link rel="preload" as="font" href={PacFont} type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href={PressStart} type="font/woff2" crossOrigin="anonymous" />
      </Helmet>
      {children}
    </>
  );
}
