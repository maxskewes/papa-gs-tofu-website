import React from 'react';
import { SiteHeaderBG } from '../site-header/HeaderComponents';
import { ResTxtSm } from '../responisve-text';

const SiteFooter = () => {
  return (
    <SiteHeaderBG>
      <div className='w-full h-full flex flex-col justify-center items-center text-TAWNY opacity-80'>
        <ResTxtSm>Papa G's Organic Tofu</ResTxtSm>
        <ResTxtSm>Portland, OR</ResTxtSm>
      </div>
    </SiteHeaderBG>
  );
};

export default SiteFooter;
