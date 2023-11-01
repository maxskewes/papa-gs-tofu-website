import React from 'react';
import { SiteHeaderBG } from '../site-header/HeaderComponents';
import { ResTxtMd } from '../responisve-text';

const SiteFooter = () => {
  return (
    <SiteHeaderBG>
      <div className='w-full h-full flex flex-col justify-center items-center text-TAWNY opacity-80'>
        <ResTxtMd>Papa G's Organic Tofu</ResTxtMd>
        <ResTxtMd>Portland, OR</ResTxtMd>
      </div>
    </SiteHeaderBG>
  );
};

export default SiteFooter;
