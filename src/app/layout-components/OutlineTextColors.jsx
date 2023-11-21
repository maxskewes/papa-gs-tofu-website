import React from 'react';
import { outline } from '../fonts';

export const OutlineTextRed = ({ words }) => {
  return (
    <div className='relative uppercase leading-none text-center text-4xl sm:text-6xl lg:text-7xl lg:mb-4 pt-0 sm:pt-8 md:pt-0 lg:pt-8'>
      <div className='absolute text-RED blur-sm'>
        <p>{words}</p>
      </div>
      <div className='absolute text-RED'>
        <p>{words}</p>
      </div>
      <div className='relative text-SOFT_BLACK'>
        <p className={outline.className}>{words}</p>
      </div>
    </div>
  );
};

export const OutlineTextBlue = ({ words }) => {
  return (
    <div className='relative text-center uppercase text-4xl sm:text-6xl lg:text-7xl mb-0 lg:mb-4 pt-0 sm:pt-8 md:pt-0 lg:pt-8'>
      <div className='absolute text-BLUE blur-sm'>
        <p>{words}</p>
      </div>
      <div className='absolute text-BLUE'>
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
    <div className='relative text-center uppercase text-4xl sm:text-6xl lg:text-7xl mb-0 lg:mb-4 pt-0 sm:pt-8 md:pt-0  lg:pt-8'>
      <div className='absolute text-GREEN blur-sm'>
        <p>{words}</p>
      </div>
      <div className='absolute text-GREEN'>
        <p>{words}</p>
      </div>
      <div className='relative text-SOFT_BLACK'>
        <p className={outline.className}>{words}</p>
      </div>
    </div>
  );
};

export const OutlineTextLanding = ({ words }) => {
  return (
    <div className='relative text-center uppercase text-2xl sm:text-4xl lg:text-6xl leading-tight'>
      <div className='absolute text-GREEN'>
        <p>{words}</p>
      </div>
      <div className='relative text-SOFT_BLACK'>
        <p className={outline.className}>{words}</p>
      </div>
    </div>
  );
};
