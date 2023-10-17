import React from 'react';

const VendorPageCard = ({ bagImage, productTitle }) => {
  return (
    <div className='fixed flex top-0 left-0 w-[100vw] h-[100vh] bg-white'>
      <div className='flex justify-center w-full h-full'>
        <img className='object-contain' src={bagImage} alt={productTitle} />
      </div>
    </div>
  );
};

export default VendorPageCard;
