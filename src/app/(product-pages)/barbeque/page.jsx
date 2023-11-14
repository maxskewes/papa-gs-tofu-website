import React from 'react';
import ProductPageLayout from '../../layout-components/ProductPageLayout';

const Barbeque = () => {
  return (
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
  );
};

export default Barbeque;
