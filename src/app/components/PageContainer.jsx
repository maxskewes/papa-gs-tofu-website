import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center text-center w-full min-h-[500px] bg-transparent pb-4 sm:pb-8'>
      {children}
    </div>
  );
};

export default PageContainer;
