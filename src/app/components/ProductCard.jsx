'use client'
import { motion } from 'framer-motion';
import PGlink from './PGlink';

const ProductCard = ({ productName, productPage, productImage, cardColor }) => {
  return (
    <div>
      <PGlink to={productPage}>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className='flex p-[4%] pr-0 content-center justify-center'
          >
            <motion.img
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={productImage}
              alt={productName}
            />
          </div>
        </motion.div>
      </PGlink>
    </div>
  );
};

export default ProductCard;
