'use client'
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
    <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className='absolute flex flex-col max-w-[200px] '
        // sx={{
        //   flexDirection: 'column',
        //   background: 'radial-gradient( #f7e5ba 60%, #e8ba4d 100%)',
        //   maxWidth: '200px',
        //   position: 'absolute',
        //   left: '20%',
        //   top: 'calc(100% - .5rem)',
        //   boxShadow: '0 5px 20px rgba(36, 36, 36, 1)',
        //   borderRadius: ' 0 0 .35rem .35rem',
        //   opacity: 0.8,
        // }}
      >
        <VarietyLink to='/original-recipe'>Original Recipe</VarietyLink>
        <VarietyLink to='/savory-sesame'>Savory Sesame</VarietyLink>
        <VarietyLink to='/street-taco'>Street Taco</VarietyLink>
        <VarietyLink to='/barbeque'>Barbeque</VarietyLink>
      </div>
    </div>
  );
}
