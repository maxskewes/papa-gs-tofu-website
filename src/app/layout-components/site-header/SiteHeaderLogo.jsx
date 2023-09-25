'use client';
import React from 'react';

import { motion } from 'framer-motion';
import PGlink from '../../components/PGlink';

export const SiteHeaderLogo = () => {
  return (
    <PGlink to='/'>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className='pl-6 md:pl-0 mt-0 sm:mt-[-10px] md:mt-[-24px] lg:mt-[-32px] w-[200px] sm:w-[250px] md:[300px] lg:[360px]'
          //   display={'flex'}
          //   padding={{ xs: '0 0 0 1.5rem', md: 0 }}
          //   width={{ xs: '200px', sm: '250px', md: '300px', lg: '360px' }}
          //   marginTop={{ xs: '0', sm: '-10px', md: '-24px', lg: '-32px' }}
          src={'/images/logo/logo-yellow-halo.png'}
          alt="Papa G's logo"
        />
      </motion.div>
    </PGlink>
  );
};

export const SiteHeadSloganLg = () => {
  return (
    <div className='flex grow-0 md:grow-1 pb-0 md:pb-[4.5rem] lg:pb-[6rem] ml-0 md:ml-[-1.25rem] lg:ml-[-1.5rem]'>
      {/* <Typography
        className='slogan'
        textAlign={{ xs: 'right', md: 'left' }}
        sx={{
          fontFamily: 'Ribeye',
          fontSize: { xs: '18px', sm: '22px', lg: '24px' },
          lineHeight: { xs: 1.25, md: 1.125 },
          fontWeight: 400,
          color: 'TAWNY',
        }}
      > */}
      {/* <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Seasoned.
      </motion.p>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Baked.
      </motion.p>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Organic.
      </motion.p> */}
    </div>
  );
};

// export const SiteHeadSloganSm = () => {
//   return (
//     <Box
//       flexGrow={{ xs: 0, md: 1 }}
//       display={'flex'}
//       paddingBottom={{ xs: 0, md: '4.5rem', lg: '6rem' }}
//       marginLeft={{ xs: 0, md: '-1.25rem', lg: '-1.5rem' }}
//     >
//       <Typography
//         className='slogan'
//         textAlign={{ xs: 'right', md: 'left' }}
//         sx={{
//           fontFamily: 'Ribeye',
//           fontSize: { xs: '18px', sm: '22px', lg: '24px' },
//           lineHeight: { xs: 1.25, md: 1.125 },
//           fontWeight: 400,
//           color: 'TAWNY',
//         }}
//       >
//         <motion.p
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           Seasoned.
//         </motion.p>
//         <motion.p
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Baked.
//         </motion.p>
//         <motion.p
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           Organic.
//         </motion.p>
//       </Typography>
//     </Box>
//   );
// };
