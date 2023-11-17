'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ProductPageLayout = ({ varietyName, imageSrc, imageAlt, children }) => {
  return (
    <div className='w-full'>

      {/* <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='text-4xl text-SOFT_BLACK text-center mb-0 md:mb-4'
      >
        <OutlineTextRed>
        {varietyName}
        </OutlineTextRed>
      </motion.div> */}

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center'>
        <motion.img
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='w-full md:max-w-[600px] lg:max-w-full'
          src={imageSrc}
          alt={imageAlt}
        />

        <motion.p
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='px-2 sm:px-4 md:px-12 lg:px-0 text-DARK_TAWNY text-justify lg:text-left indent-4 font-semibold'
        >
          {children}
        </motion.p>
      </div>
    </div>
  );
};

export default ProductPageLayout;
