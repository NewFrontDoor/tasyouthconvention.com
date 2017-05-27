import React from 'react';
import PropTypes from 'prop-types';

const BasicContent = ({content}) => {
  return (
    <div className="article">
      {content.title ? (<h2>{content.title}</h2>) : ''}
      <div className="article-body" dangerouslySetInnerHTML={{__html: content.body}}></div>
    </div>
  );
};

BasicContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string.isRequired
  })
};

export default BasicContent;
