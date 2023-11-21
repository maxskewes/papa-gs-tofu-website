'use client';
import { React, useState } from 'react';
import { motion } from 'framer-motion';
import PGlink from '../../components/PGlink';

export default function VarietiesMenu() {
  const [varietiesMenuOpen, setVarietiesMenuOpen] = useState(false);

  const VarietyLink = ({ to, children }) => {
    return (
      <PGlink to={to}>
        <p className='rounded-md uppercase text-MED_TAWNY font-RIBEYE text-base lg:text-lg font-semibold text-center p-0.5 md:p-2 hover:text-TAWNY hover:bg-MED_TAWNY whitespace-nowrap'>
          {children}
        </p>
      </PGlink>
    );
  };

  const VarietiesHover = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='absolute z-10 top-[4.5rem] flex flex-col justify-center items-center rounded-md
        bg-gradient-radial from-BGinner to-BGoutter'
      >
        <VarietyLink to='/original-recipe'>Original Recipe</VarietyLink>
        <VarietyLink to='/savory-sesame'>Savory Sesame</VarietyLink>
        <VarietyLink to='/street-taco'>Street Taco</VarietyLink>
        <VarietyLink to='/barbeque'>Barbeque</VarietyLink>
      </motion.div>
    );
  };

  return (
    <div
      className='flex flex-col'
      onMouseEnter={() => setVarietiesMenuOpen(true)}
      onMouseLeave={() => setVarietiesMenuOpen(false)}
    >
      <p className='text-2xl lg:text-4xl text-TAWNY hover:text-RICH_TAWNY my-4
      [text-shadow:_3px_2px_2px_rgb(194_145_96_/_60%)]
      '>Varieties.</p>
      {varietiesMenuOpen && <VarietiesHover />}
    </div>
  );
}
