'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProductPageLayout from '../../layout-components/ProductPageLayout';
import { OutlineTextGreen } from '../../layout-components/OutlineTextColors';

const Sesame = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <OutlineTextGreen words={'Savory Sesame'} />
      </motion.div>

      <ProductPageLayout
        varietyName={'Savory Sesame'}
        imageSrc={'/images/boards/savory-sesame-all.png'}
        imageAlt={'Image of Savory Sesame product package over board'}
      >
        Organic tofu is marinated in tamari and sesame oil, seasoned with garlic, turmeric, sesame
        seeds, other organic spices, and baked to perfection. The result is an incredibly tender,
        chewy bite, and savory flavor. Naturally low in fat and cholesterol-free, each bag is packed
        with over 30 grams of protein, calcium, and iron to give you the fuel you need to live your
        best life! We use only the highest quality, organic ingredients to provide you with superior
        taste, and nutrition in every bite. Papa G&apos;s Savory Sesame Tofu adds instant flavor and
        texture to soups, salads, curries and rice dishes. Just as good straight from the bag as it
        is on your favorite meals, you&apos;ll find Papa G&apos;s Savory Sesame Tofu is the most
        convenient and versatile item in your refrigerator!
      </ProductPageLayout>
    </div>
  );
};

export default Sesame;
