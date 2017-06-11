import React from 'react';

export default ({show, children}) => {
  if (show === false) return null;
  return (
    <div className="alert alert-danger"><i className="fa fa-exclamation-sign"></i> {children}</div>
  )
}
