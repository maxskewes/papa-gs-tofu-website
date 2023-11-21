'use client';
import React from 'react';
import SiteHeaderLg from './SiteHeaderLg';
import SiteHeaderSm from './SiteHeaderSm';
import { SiteHeaderBG } from './HeaderComponents';

const SiteHeader = () => {
  return (
    <div className='shadow-[0_10px_40px_0px_rgba(90,60,5,0.7)]'>
    <SiteHeaderBG>
      <SiteHeaderLg />
      <SiteHeaderSm />
    </SiteHeaderBG>
    </div>
  );
};

export default SiteHeader;
