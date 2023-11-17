'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProductPageLayout from '../../layout-components/ProductPageLayout';
import { OutlineTextBlue } from '../../layout-components/OutlineTextColors';

const Barbeque = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <OutlineTextBlue words={'Barbeque'} />
      </motion.div>

      <ProductPageLayout
        varietyName={'Barbeque'}
        imageSrc={'/images/boards/barbeque-all.png'}
        imageAlt={'Image of Barbeque product package over board'}
      >
        BBQ tofu just got better. Papa G&apos;s Organic Barbeque Tofu is our plant-based version of
        the popular southern favorite. Just heat, eat, and enjoy! We marinate Organic Tofu in our
        secret recipe organic bbq sauce with just the right blend of sweet, savory, and smoke, and
        bake to perfection. Devour bbq tofu sandwiches with coleslaw, BBQ bowls with rice, pineapple
        and vegetables, on top of a salad, or straight out of the bag!
      </ProductPageLayout>
    </div>
  );
};

export default Barbeque;
