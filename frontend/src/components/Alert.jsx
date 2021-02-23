import React from 'react';

const Alert = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <p className="alert">{message}</p>;
};

export default Alert;
