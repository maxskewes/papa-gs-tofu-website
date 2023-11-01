'use client';
import React from 'react';
// import '../styles.css';
import { motion } from 'framer-motion';

const PageHead = ({ title, subtitle, subtitle2 }) => {
  return (
    <div className='flex flex-col justify-center'>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className='mb-2 md:mb-4 text-SOFT_BLACK leading-4 lg:leading-6'>{title}</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <h4 className='text-MED_TAWNY font-semibold text-center mw-[900px]'>{subtitle}</h4>
        <h4 className='text-MED_TAWNY font-semibold text-center mw-[900px]'>{subtitle2}</h4>
      </motion.div>
    </div>
  );
};

export default PageHead;
