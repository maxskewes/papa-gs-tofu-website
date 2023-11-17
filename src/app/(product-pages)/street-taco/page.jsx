'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProductPageLayout from '../../layout-components/ProductPageLayout';
import { OutlineTextRed } from '../../layout-components/OutlineTextColors';

const Taco = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <OutlineTextRed words={'Street Taco'} />
      </motion.div>

      <ProductPageLayout
        varietyName={'Street Taco'}
        imageSrc={'/images/boards/street-taco-all.png'}
        imageAlt={'Image of Street Taco product package over board'}
      >
        Spice up any meal with Papa G&apos;s Organic Street Taco Tofu! We all know tofu is a great
        vegan alternative to meat, but some of us just don&apos;t have time to prep it from scratch.
        This is where Papa G&apos;s Street Taco Tofu crumbles save the day! Our taco tofu crumbles
        are made from organic soybeans, combined with organic spices and lime juice. We then bake
        and season the crumbles to bring you a delicious plant-based alternative to meat. This
        protein-rich alternative is naturally low in fat and cholesterol-free, offering 30g of
        protein to energize your day. We use only the highest quality organic ingredients to provide
        you with superior taste and nutrition in every bite. Street Taco Tofu crumbles are perfect
        for taco nights, burrito afternoons, and morning scrambles. Papa G&apos;s Street Taco Tofu
        brings the taco feel and flavor you remember to any meal instantly!
      </ProductPageLayout>
    </div>
  );
};

export default Taco;
