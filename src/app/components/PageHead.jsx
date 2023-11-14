'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ResTxtLg, ResTxtMd, ResTxtXl, ResTxtSm } from '../layout-components/responisve-text';

const PageHead = ({ title, subtitle }) => {
  return (
    <div className='p-4 flex flex-col justify-center text-center'>
      <motion.p
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl mb-4 text-SOFT_BLACK leading-4 lg:leading-6'
      >
        {title}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
      className='text-xl md:text-2xl xl:text-4xl text-MED_TAWNY font-semibold text-center'>
          {subtitle}
      </motion.p>
    </div>
  );
};

export default PageHead;
