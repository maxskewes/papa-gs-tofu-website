'use client'
import { motion } from 'framer-motion';
import PageContainer from '../../components/PageContainer';
import PageHead from '../../components/PageHead';

const Get = () => {
  return (
    <PageContainer>
      <PageHead title={'Get'} subtitle={'Our products are available from these fine grocers.'} />
      <div className='w-full flex flex-wrap m-4 gap-4 justify-center items-center'>
        <div className='w-[200px] sm:w-[300px]'>
          <a href='https://www.newseasonsmarket.com/' target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src='/images/grocers/new-seasons.png'
              alt='New Seasons'
              width='100%'
            />
          </a>
        </div>
        <div className='w-[200px] sm:w-[300px]'>
          <a href='https://www.cutieebuys.club/' target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src='/images/grocers/cutiee-buys-coffee-beer.png'
              alt='Cutiee Buys / Coffee Beer'
              width='100%'
            />
          </a>
        </div>
        <div className='w-[150px] sm:w-[200px]'>
          <a href='https://foodfightgrocery.com/' target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src='/images/grocers/food-fight.png'
              alt='Food Fight'
              width='100%'
            />
          </a>
        </div>
        <div className='w-[200px] sm:w-[300px]'>
          <a href='https://www.peoples.coop/' target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src='/images/grocers/peoples-food-coop.png'
              alt="People's Food Co-op"
              width='100%'
            />
          </a>
        </div>
        <div className='w-[200px] sm:w-[300px]'>
          <a
            href='https://b-linepdx.com/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src='/images/grocers/b-line.png'
              alt="b-line"
              width='100%'
            />
          </a>
        </div>
        <div className='w-[150px] sm:w-[200px]'>
          <a
            href='https://www.facebook.com/beaumontvillagemarket/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src='/images/grocers/beaumont-market.png'
              alt='Beaumont Market'
              width='100%'
            />
          </a>
        </div>
        <div className='w-[200px] sm:w-[300px]'>
          <a href='https://secretpizzasociety.com/' target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              src='/images/grocers/secret-pizza-society.png'
              alt='Secret Pizza Society'
              width='100%'
            />
          </a>
        </div>
        <div className='w-[200px] sm:w-[300px]'>
          <a href='https://www.instacart.com/' target='_blank' rel='noreferrer noopener'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src='/images/grocers/insta-cart.png'
              alt='Instacart link'
              width='100%'
            />
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default Get;
