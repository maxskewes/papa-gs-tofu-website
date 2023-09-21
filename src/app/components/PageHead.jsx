import React from 'react';
import '../styles.css';
import { motion } from 'framer-motion';

const PageHead = ({ title, subtitle, subtitle2 }) => {
  return (
    <div className='flex flex-col'>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className='mb-2 md:mb-4 text-SOFT_BLACK leading-4 lg:leading-6'>
          {title}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* <Typography
          sx={{
            fontSize: { xs: '20px', sm: '24px', md: '28px' },
            lineHeight: 1.2,
            fontFamily: 'Ribeye',
            textAlign: 'center',
            maxWidth: 900,
            color: 'MED_TAWNY',
            fontWeight: 600,
          }}
        >
          {subtitle}
        </Typography> */}
        <h5 className='text-TAWNY font-semibold text-center mw-[900px]'>
          {subtitle2}
        </h5>
      </motion.div>
    </div>
  );
};

export default PageHead;
