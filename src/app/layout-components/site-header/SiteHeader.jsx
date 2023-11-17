'use client';
import React from 'react';
import SiteHeaderLg from './SiteHeaderLg';
import SiteHeaderSm from './SiteHeaderSm';
import { SiteHeaderBG } from './HeaderComponents';

const SiteHeader = () => {
  return (
    <SiteHeaderBG>
      <SiteHeaderLg />
      <SiteHeaderSm />
    </SiteHeaderBG>
  );
};

export default SiteHeader;
