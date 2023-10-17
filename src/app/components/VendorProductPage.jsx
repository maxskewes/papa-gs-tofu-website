import React from 'react';
import PGlink from './PGlink';

const VendorProductPage = ({ productLink, productTitle }) => {
  return (
    <div className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-white'>
      <div className='fixed flex flex-col items-start'>
        <PGlink to={`/nutrition-facts/${productLink}`}>Nutrition Facts</PGlink>
        <PGlink to={`/${productLink}`}>Product Page</PGlink>
        <PGlink to={'/'}>Site Home</PGlink>
      </div>
      <div className='flex justify-center w-full h-full'>
        <img
          className='object-contain'
          src={`/images/bags/bag-1000-${productLink}.png`}
          alt={`product image of ${productTitle} variety`}
        />
      </div>
    </div>
  );
};

export default VendorProductPage;
