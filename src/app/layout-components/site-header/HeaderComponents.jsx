'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PGlink from '../../components/PGlink';

export const SiteHeaderBG = ({ children }) => {
  return (
    <div className='w-[100vw] h-auto md:h-[160px] lg:h-[188px] bg-gradient-to-r from-BLACK via-RED to-BLACK'>
      {children}
    </div>
  );
};

export const SiteHeaderBGSm = ({ children }) => {
  return (
    <div className='md:hidden w-[100vw] h-full bg-gradient-to-r from-BLACK via-RED to-BLACK'>
      {children}
    </div>
  );
};

export const SiteHeaderLogo = () => {
  return (
    <PGlink to='/'>
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='pl-6 md:pl-0 mt-0 sm:mt-[-10px] md:mt-[-24px] lg:mt-[-32px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[360px]'
        src={'/images/logo/logo-yellow-halo.png'}
        alt="Papa G's logo"
      />
    </PGlink>
  );
};

export const SiteHeaderSloganLg = () => {
  return (
    <div className='flex flex-col pb-0 md:pb-[4.5rem] lg:pb-24 ml-[-1.25rem] lg:[-1.5rem] grow-1'>
      <h4 className='text-left text-lg lg:text-2xl text-TAWNY font-marrow'>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='[text-shadow:_3px_2px_2px_rgb(194_145_96_/_60%)]'
        >
          Seasoned.
        </motion.p>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className='[text-shadow:_3px_2px_2px_rgb(194_145_96_/_60%)]'
        >
          Baked.
        </motion.p>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='[text-shadow:_3px_2px_2px_rgb(194_145_96_/_60%)]'
        >
          Organic.
        </motion.p>
      </h4>
    </div>
  );
};

export const SiteHeaderSloganSm = () => {
  return (
    <div className='flex flex-col grow-0 md:grow-1 pb-0 md:pb-[4.5rem] ml-0 md:ml-[-1.25rem]'>
      <h4 className='text-right text-TAWNY font-marrow'>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Seasoned.
        </motion.p>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Baked.
        </motion.p>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Organic.
        </motion.p>
      </h4>
    </div>
  );
};
