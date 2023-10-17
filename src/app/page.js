'use client';
import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-6 sm:p-12'>
        <div className='bg-YELLOW rounded-lg'>
          <ProductCard
            productName={'Original Recipe'}
            productPage={'/original-recipe'}
            productImage={'/images/bags/bag-500-original.png'}
          />
        </div>
        <div className='bg-GREEN rounded-lg'>
          <ProductCard
            productName={'Savory Sesame'}
            productPage={'/savory-sesame'}
            productImage={'/images/bags/bag-500-sesame.png'}
          />
        </div>
        <div className='bg-RED rounded-lg'>
          <ProductCard
            productName={'Taco Tofu'}
            productPage={'/street-taco'}
            productImage={'/images/bags/bag-500-taco.png'}
          />
        </div>
        <div className='bg-BLUE rounded-lg'>
          <ProductCard
            productName={'BBQ'}
            productPage={'/barbeque'}
            productImage={'/images/bags/bag-500-bbq.png'}
          />
        </div>
      </div>
      <div className='flex w-[280px] sm:[400px] align-center justify-center'>
        <img
          src='/images/icons/dietary-icons.png'
          alt='dietary icon list'
          width='100%'
        />
      </div>
    </main>
  );
}
