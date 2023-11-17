'use client';
import { motion } from 'framer-motion';
import { ResTxtLg, ResTxtMd, ResTxtXl } from '../app/layout-components/responisve-text';
import ProductCard from './components/ProductCard';
import { OutlineTextLanding } from './layout-components/OutlineTextColors';
import { BrickHeading } from './layout-components/HeadingComponents';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-2'>
      <div className='flex justify-center items-center flex-col w-full pt-0 pb-8'>
        <OutlineTextLanding words={"Papa G's Organic Tofu."} />

        <p className='text-SOFT_BLACK text-2xl lg:text-4xl leading-tight'>because</p>

        <div className='relative w-full'>
          <img
            src='/images/brick-red.svg'
            alt="YOU CAN'T EAT A BRICK."
            className='absolute blur-sm py-2 px-8'
            width='100%'
          />
          <img
            src='/images/brick.svg'
            alt="YOU CAN'T EAT A BRICK."
            className='relative py-2 px-8'
            width='100%'
          />
        </div>

      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-3 lg:gap-4'>
        <div className='bg-YELLOW rounded-lg'>
          <ProductCard
            productName={'Original Recipe'}
            productPage={'/original-recipe'}
            productImage={'/images/bags/bag-500-original-recipe.png'}
          />
        </div>
        <div className='bg-GREEN rounded-lg'>
          <ProductCard
            productName={'Savory Sesame'}
            productPage={'/savory-sesame'}
            productImage={'/images/bags/bag-500-savory-sesame.png'}
          />
        </div>
        <div className='bg-RED rounded-lg'>
          <ProductCard
            productName={'Taco Tofu'}
            productPage={'/street-taco'}
            productImage={'/images/bags/bag-500-street-taco.png'}
          />
        </div>
        <div className='bg-BLUE rounded-lg'>
          <ProductCard
            productName={'BBQ'}
            productPage={'/barbeque'}
            productImage={'/images/bags/bag-500-barbeque.png'}
          />
        </div>
      </div>
      <div className='flex w-full align-center justify-center m-8 grow-1'>
        <div className='max-w-[400px]'>
          <img src='/images/icons/dietary-icons.png' alt='dietary icon list' width='100%' />
        </div>
      </div>
    </main>
  );
}
