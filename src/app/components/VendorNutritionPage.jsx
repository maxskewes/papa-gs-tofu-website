import React from 'react';
import PGlink from './PGlink';

const VendorNutritionPage = ({ productLink, productTitle }) => {
  return (
    <div className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-white'>
      <div className='fixed flex flex-col items-start'>
        <PGlink to={`/product-image/${productLink}`}>Product Image</PGlink>
        <PGlink to={`/${productLink}`}>Product Page</PGlink>
        <PGlink to={'/'}>Site Home</PGlink>
      </div>
      <div className='flex justify-center w-full h-full p-[1%]'>
        <img
          className='object-contain'
          src={`/images/nutrition-facts/nutrition-${productLink}.png`}
          alt={`${productTitle} variety nutritional information`}
        />
      </div>
    </div>
  );
};

export default VendorNutritionPage;
