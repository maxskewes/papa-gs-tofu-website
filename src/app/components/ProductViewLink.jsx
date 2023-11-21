import React from 'react';
import Link from 'next/link';

const ProductViewLink = ({ productRoute }) => {
  return (
    <div className='p-2 flex justify-center items-center'>
      <Link href={`/product-image/${productRoute}`}>
        <button className='px-4 my-1 text-TAWNY_DARK border-solid border-2 border-TAWNY_DARK bg-BGinner rounded-xl hover:text-TAWNY_SOFT hover:bg-MED_TAWNY'>
          View Product Image
        </button>
      </Link>
    </div>
  );
};

export default ProductViewLink;
