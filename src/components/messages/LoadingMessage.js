import React from 'react';


export default ({show, children}) => {
  if (show === false) return null;
  return (
    <div className="alert alert-success"><i className="fa fa-spin spinner"></i> {children}</div>
  )
};
