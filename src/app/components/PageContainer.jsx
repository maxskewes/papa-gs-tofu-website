import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div className='p-4 flex flex-col justify-center items-center text-center w-full min-h-[500px] bg-transparent'>
      {children}
    </div>
  );
};

export default PageContainer;
