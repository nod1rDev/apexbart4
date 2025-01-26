import React from 'react';

import { Helmet } from 'react-helmet-async';

import { companyInfo } from '../utils';

export const SEO = ({ 
  title, 
  description,
  keywords = [],
  image = '/og-image.jpg',
  schema
}) => {
  const pageTitle = title ? `${title} | ${companyInfo.name}` : companyInfo.name;
  
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
