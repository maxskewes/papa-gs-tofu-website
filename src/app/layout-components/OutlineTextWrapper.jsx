import React from 'react';
import { outline } from '../fonts';

const OutlineTextWrapper = ({ children }) => {
  return <div className={outline.className}>{children}</div>;
};

export default OutlineTextWrapper;
