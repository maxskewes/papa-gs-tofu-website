'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PGlink from '../../components/PGlink';

const Swatch = () => {
  return (
    <div className='flex m-[30px]'>
      <div className='w-[30px] h-[30px] bg-TAWNY m-4' />
      <div className='w-[30px] h-[30px] bg-MED_TAWNY m-4' />
      <div className='w-[30px] h-[30px] bg-RICH_TAWNY m-4' />
      <div className='w-[30px] h-[30px] bg-DARK_TAWNY m-4' />
    </div>
  );
};

const SiteHeader = () => {
  return (
    <SiteHeaderBG>
      <div className='flex'>
        <SiteHeaderLogo />
        <Swatch />
      </div>
    </SiteHeaderBG>
  );
};

export default SiteHeader;

const SiteHeaderLogo = () => {
  return (
    <PGlink to='/'>
      <motion.img
        className='pl-6 md:pl-0 mt-0 sm:mt-[-10px] md:mt-[-24px] lg:mt-[-32px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[360px]'
        src={'/images/logo/logo-yellow-halo.png'}
        alt="Papa G's logo"
      />
    </PGlink>
  );
};

const SiteHeaderBG = ({ children }) => {
  return (
    <div className='w-[100vw] h-[220px] bg-gradient-to-r from-BLACK via-RED to-BLACK shadow-lg'>
      {children}
    </div>
  );
};
