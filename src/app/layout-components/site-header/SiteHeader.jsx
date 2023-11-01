'use client';
import React from 'react';
import SiteHeaderLg from './SiteHeaderLg';
// import SiteHeadSm from './SiteHeadSm';
import { SiteHeaderBG } from './HeaderComponents';


const SiteHeader = () => {
  return (
    <div>
    <SiteHeaderBG>
      <SiteHeaderLg />
      {/* <SiteHeadSm /> */}
    </SiteHeaderBG>
    </div>
  );
};

export default SiteHeader;
