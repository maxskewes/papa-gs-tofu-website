import React from 'react';
import Link from 'next/link'

const PGlink = ({ to, children }) => {
  return (
    <Link
      href={to}
      cursor='pointer'
      className='w-full'
    >
      {children}
    </Link>
  );
};

export default PGlink;
