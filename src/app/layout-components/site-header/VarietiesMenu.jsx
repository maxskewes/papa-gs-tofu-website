'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PGlink from '../../components/PGlink';

export default function VarietiesMenu() {
  const VarietyLink = ({ to, children }) => {
    return (
      <PGlink to={to}>
        <p className='uppercase text-MED_TAWNY font-RIBEYE text-xs font-semibold text-center p-0.5 :h-text-TAWNY :h-bg-MED_TAWNY'>
          {children}
        </p>
      </PGlink>
    );
  };

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='absolute flex flex-col justify-center items-center '
    >
      <VarietyLink to='/original-recipe'>Original Recipe</VarietyLink>
      <VarietyLink to='/savory-sesame'>Savory Sesame</VarietyLink>
      <VarietyLink to='/street-taco'>Street Taco</VarietyLink>
      <VarietyLink to='/barbeque'>Barbeque</VarietyLink>
    </div>
  );
}
