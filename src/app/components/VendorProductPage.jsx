import React from 'react';
import PGlink from './PGlink';

const VendorProductPage = ({ productLink, productTitle }) => {
  const VendorLink = ({ children, to }) => {
    return (
      <PGlink to={to}>
        <p className='text-md text-TAWNY_DARK hover:text-TAWNY'>{children}</p>
      </PGlink>
    );
  };

  return (
    <div className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-white p-4 z-2'>
      <div className='fixed flex flex-col items-start'>
        <VendorLink to={`/nutrition-facts/${productLink}`}>
          {productTitle} Nutrition Facts
        </VendorLink>
        <VendorLink to={`/${productLink}`}>{productTitle} Product Page</VendorLink>
        <VendorLink to={'/'}>Papa G's Website/ <br/>&nbsp; Home Page</VendorLink>

        <div className='my-2'>
          <p>Product Images:</p>
          <div className='mx-2'>
            <VendorLink to={'/product-image/original-recipe'}>Original Recipe</VendorLink>
            <VendorLink to={'/product-image/savory-sesame'}>Savory Sesame</VendorLink>
            <VendorLink to={'/product-image/street-taco'}>Street Taco</VendorLink>
            <VendorLink to={'/product-image/barbeque'}>Barbeque</VendorLink>
          </div>
        </div>
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
