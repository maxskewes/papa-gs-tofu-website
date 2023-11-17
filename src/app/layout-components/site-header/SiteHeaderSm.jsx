import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiteHeaderBG, SiteHeaderBGSm, SiteHeaderLogo, SiteHeaderSloganSm } from './HeaderComponents';
import PGlink from '../../components/PGlink';
import { MdRestaurantMenu } from 'react-icons/md';
import {PiForkKnifeFill} from 'react-icons/pi'

const SiteHeaderSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <SiteHeaderBGSm>
      <div className='flex md:hidden justify-between items-center px-4 sm:px-8'>
        <MenuToggle className='grow-1' handleToggle={handleToggle} isOpen={isOpen} />
        <SiteHeaderLogo />
        <SiteHeaderSloganSm />
      </div>
      <SmLinkContainer isOpen={isOpen} />
    </SiteHeaderBGSm>
  );
};

const MenuToggle = ({ handleToggle, isOpen }) => {
  return (
    <div
 className='relative flex md:hidden w-[50px] mb-1 cursor-pointer' onClick={handleToggle}>
        {isOpen ? <MenuIconOpen /> : <MenuIconClosed />}
 
    </div>
  );
};

const MenuIconOpen  = () => {
  return (
    <motion.div
    initial={{ rotateY: 180 }}
    animate={{ rotateY: 0 }}
    transition={{
      duration: .3,
    }}
  className='flex flex-col items-center justify-start text-TAWNY hover:text-TAWNY_SOFT'>
      <PiForkKnifeFill size='40px' />
      <p className='text-base sm:text-lg'>MENU</p>
    </motion.div>
  );
};

const MenuIconClosed = () => {
  return (
    <motion.div
    initial={{ rotateY: 180 }}
    animate={{ rotateY: 0 }}
    transition={{
      duration: .3,
    }} className='flex flex-col items-center justify-start text-TAWNY hover:text-TAWNY_SOFT'>

      <MdRestaurantMenu size='40px' />
      <p className='text-base sm:text-lg'>MENU</p>
    </motion.div>
  );
};

const SmLinkItem = ({ to, title }) => {
  return (
    <PGlink to={to}>
      <div className='flex flex-col min-w-[100vw] cursor-pointer text-TAWNY justify-center items-center text-center py-2 hover:text-TAWNY_SOFT hover:bg-dropdownItemBG'>
        <p className='uppercase text-sm sm:text-base'>{title}</p>
      </div>
    </PGlink>
  );
};

const SmLinkContainer = ({ isOpen }) => {
  return isOpen ? (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    
    className='md:hidden justify-center items-center flex-col'>
      <SiteHeaderBGSm>
      <SmLinkItem to={'/original-recipe'} title={'Original Recipe'} />
      <SmLinkItem to={'/savory-sesame'} title={'Savory Sesame'} />
      <SmLinkItem to={'/street-taco'} title={'Street Taco'} />
      <SmLinkItem to={'/barbeque'} title={'Barbeque'} />
      <SmLinkItem to={'/get'} title={'Where to purchase'} />
      <SmLinkItem to={'/us'} title={"Papa G's Vegan Organics"} />
      </SiteHeaderBGSm>
    </motion.div>
  ) : null;
};

export default SiteHeaderSm;
