import React from 'react';

const SiteBG = ({ children }) => {
  return (
    <div className='w-full h-full min-h-min bg-gradient-radial from-BGinner via-BGinner to-BGoutter'>
      {children}
    </div>
  );
};

export default SiteBG;
