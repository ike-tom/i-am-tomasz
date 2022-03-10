import React from 'react';
import './layout.css';
import { Helmet } from 'react-helmet';

export default function Layout({ title, children, metaDescription }) {
  return (
    <div>
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
        ]}
      />

      {children}
    </div>
  );
}
