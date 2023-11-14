import React from 'react';
import { RiFacebookCircleFill, RiInstagramFill, RiMailFill } from 'react-icons/ri';
import { ResTxtMd, ResTxtSm } from '../responisve-text';
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
  
      <div className=' p-8 flex flex-col justify-center items-center text-TAWNY opacity-80'>
        <div className='w-full flex flex-row justify-center text-center'>
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
        <ResTxtMd>Papa G's Organic Tofu</ResTxtMd>
        <ResTxtMd>Portland, OR</ResTxtMd>
      </div>

    </SiteFooterBG>
  );
};

export default SiteFooter;
