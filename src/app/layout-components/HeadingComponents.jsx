"use client"
import React from 'react';
import { motion } from 'framer-motion';

export const Heading = ({ heading }) => {
  return (
    <motion.p
      initial={{ scale: 0.8, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='uppercase text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-SOFT_BLACK leading-none'
    >
      {heading}
    </motion.p>
  );
};

export const PageHeading = ({ title }) => {
  return (
    <motion.p
      initial={{ scale: 0.8, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='uppercase text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl mb-4 text-SOFT_BLACK leading-4 lg:leading-6'
    >
      {title}
    </motion.p>
  );
};

export const PageSubheading = ({ subtitle }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='text-xl md:text-2xl xl:text-4xl text-DARK_TAWNY font-semibold text-center px-4 my-4'
    >
      {subtitle}
    </motion.p>
  );
};

export const Subheading = ({ subheading }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='text-xl md:text-2xl xl:text-4xl text-DARK_TAWNY font-semibold text-center'
    >
      {subheading}
    </motion.p>
  );
};

export const ParagraphText = ({ children }) => {
  return (
    <motion.p
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='text-md sm:text-lg md:text-xl px-2 sm:px-4 md:px-12 lg:px-0 text-DARK_TAWNY text-justify indent-4 font-semibold max-w-[1000px]'
    >
      {children}
    </motion.p>
  );
};

export const PageText = ({ children }) => {
  return (
    <motion.p
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='text-md sm:text-lg md:text-xl px-2 sm:px-4 md:px-12 lg:px-0 my-4 text-DARK_TAWNY text-justify indent-4 font-semibold max-w-[1000px]'
    >
      {children}
    </motion.p>
  );
};

