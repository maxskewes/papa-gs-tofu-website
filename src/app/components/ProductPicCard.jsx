import React from 'react';

const ProductPicCard = ({ imgSrc, alt }) => {
  return (
    <div className='p-.5 h-full w-full fixed bg-white z-2'>
      <img className='h-full w-full object-contain' src={imgSrc} alt={alt} />
    </div>
  );
};

export default ProductPicCard;
