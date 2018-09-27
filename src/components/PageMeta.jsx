import React from 'react';
import Helmet from 'react-helmet';

const PageMeta = (props) => {
  const { title, description } = props;
  return (
    <Helmet
      title={title} >
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default PageMeta;
