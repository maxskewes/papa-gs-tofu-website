'use client';
import { React, useState } from 'react';
import PGlink from '../../components/PGlink';

export default function VarietiesMenu() {

  const [varietiesMenuOpen, setVarietiesMenuOpen] = useState(false);


  const VarietyLink = ({ to, children }) => {
    return (
      <PGlink to={to}>
        <p className='uppercase text-MED_TAWNY font-RIBEYE text-xs font-semibold text-center p-0.5 :h-text-TAWNY :h-bg-MED_TAWNY'>
          {children}
        </p>
      </PGlink>
    );
  };

  const VarietiesHover = () => {
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
    )
  }

  return (

    <div className='flex flex-col'
    onMouseEnter={() => setVarietiesMenuOpen(true)}
    onMouseLeave={() => setVarietiesMenuOpen(false)}
    >
    <p

      className='text-2xl lg:text-4xl text-TAWNY hover:text-RICH_TAWNY'
    >
      Varieties.
    </p>
    {varietiesMenuOpen && (<VarietiesHover />)}
  </div>





  );
}
