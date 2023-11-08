'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SiteBG from './SiteBG';

const ProductPageLayout = ({ varietyName, shadowClassName, imageSrc, imageAlt, children }) => {
  return (
   
      <div className='pt-8 pb-12'>
        <motion.div
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className='text-4xl text-SOFT_BLACK text-center mb-0 md:mb-4'>{varietyName}</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <motion.img
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          className='w-full' src={imageSrc} alt={imageAlt} />

          <motion.p
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='text-DARK_TAWNY text-justify md:text-left indent-4 font-semibold'
            // sx={{
            //   marginTop: { xs: '-.5rem', md: '1.5rem' },
            //   paddingX: { xs: '.5rem', md: 0 },
            //   fontSize: {
            //     xs: '.875rem',
            //     sm: '1rem',
            //     md: '1.125',
            //     lg: '1.25rem',
            //   },
          >
            {children}
          </motion.p>
        </div>
      </div>

  );
};

export default ProductPageLayout;
