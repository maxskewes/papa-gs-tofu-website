import React from 'react';
import { RiFacebookCircleFill, RiInstagramFill, RiMailFill } from 'react-icons/ri';
import PGlink from '../../components/PGlink';

const SiteFooter = () => {
  const SiteFooterBG = ({ children }) => {
    return (
      <div className='w-[100vw] h-auto bg-gradient-to-r from-BLACK via-RED to-BLACK shadow-lg pb-8 pt-4'>
        {children}
      </div>
    );
  };

  return (
    <SiteFooterBG>
      <div className='p-8 flex flex-col justify-center items-center text-TAWNY opacity-80'>
        <div className='flex flex-row justify-center items-center text-center'>
          <a
            href='https://www.facebook.com/PapaGsVeganOrganicDeli'
            className='py-4 px-4 sm:px-6 md:px-8 cursor-pointer text-TAWNY hover:text-TAWNY_SOFT'
          >
            <RiFacebookCircleFill size='40px' />
          </a>

          <a
            href='https://www.instagram.com/explore/locations/986157498/papa-gs-pizza-and-pasta/?hl=en'
            className='py-4 px-4 sm:px-6 md:px-8 cursor-pointer text-TAWNY hover:text-TAWNY_SOFT'
          >
            <RiInstagramFill size='40px' />
          </a>

          <PGlink to='/contact'>
            <p className='py-4 px-4 sm:px-6 md:px-8 cursor-pointer text-TAWNY hover:text-TAWNY_SOFT'>
              <RiMailFill size='40px' />
            </p>
          </PGlink>
        </div>

        <p className='text-TAWNY text-center text-lg sm:text-xl md:text-2xl hover:text-TAWNY_SOFT [text-shadow:_3px_2px_2px_rgb(194_145_96_/_60%)]'>
          <PGlink to='/contact'>
            Papa G&apos;s Organic Tofu <br />
            Portland, OR
          </PGlink>
        </p>
      </div>
    </SiteFooterBG>
  );
};

export default SiteFooter;
