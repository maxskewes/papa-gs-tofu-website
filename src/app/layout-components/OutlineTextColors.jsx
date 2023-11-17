import React from 'react';
import { outline, ribeye, marrow } from '../fonts';

export const OutlineTextRed = ({ words }) => {
  return (
    <div className='uppercase text-4xl sm:text-6xl lg:text-7xl mb-0 lg:mb-4 pt-0 lg:pt-8'>
      <div className='absolute text-RED blur-sm'>
        <p>{words}</p>
      </div>
      <div className='relative text-SOFT_BLACK'>
        <p className={outline.className}>{words}</p>
      </div>
    </div>
  );
};

export const ColoredTextRibeye = ({ words }) => {
  return (
    <div className='uppercase text-4xl sm:text-6xl mb-0 md:mb-4'>
      <div className='absolute text-RED blur-sm'>
        <p className={ribeye.className}>{words}</p>
      </div>
      <div className='relative text-SOFT_BLACK'>
        <p className={marrow.className}>{words}</p>
      </div>
    </div>
  );
};

export const OutlineTextBlue = ({ words }) => {
    return (
      <div className='uppercase text-4xl sm:text-6xl lg:text-7xl mb-0 lg:mb-4 pt-0 lg:pt-8'>
        <div className='absolute text-BLUE blur-sm'>
          <p>{words}</p>
        </div>
        <div className='relative text-SOFT_BLACK'>
          <p className={outline.className}>{words}</p>
        </div>
      </div>
    );
  };

export const OutlineTextGreen = ({ words }) => {
  return (
    <div className='uppercase text-4xl sm:text-6xl lg:text-7xl mb-0 lg:mb-4 pt-0 lg:pt-8'>
      <div className='absolute text-GREEN blur-sm'>
        <p>{words}</p>
      </div>
      <div className='relative text-SOFT_BLACK'>
        <p className={outline.className}>{words}</p>
      </div>
    </div>
  );
};