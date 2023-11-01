'use client';
import { React, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SiteHeaderLogo, SiteHeaderSloganLg } from './HeaderComponents';
import PGlink from '../../components/PGlink';
import VarietiesMenu from './VarietiesMenu';

const SiteHeaderLg = () => {
  const [varietiesMenuOpen, setVarietiesMenuOpen] = useState(false);
  const handleClick = () => {
    setVarietiesMenuOpen(!varietiesMenuOpen);
  };
  const handleHover = () => {
    setVarietiesMenuOpen(true);
  };

  let menuRef = useRef();
  let openMenuRef = useRef();

  useEffect(() => {
    let handleHover = (e) => {
      if (openMenuRef.current.contains(e.target)) {
        setVarietiesMenuOpen(true);
      }
    };
    document.addEventListener('mouseenter', handleHover);
  });

  useEffect(() => {
    let handleClose = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setVarietiesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
  });

  const LgLinkItem = ({ to, description, title, children }) => {
    return (
      <PGlink to={to}>
        <div className='px-6'>
          <h1 className=' text-3xl text-TAWNY hover:text-RICH_TAWNY'>{title}</h1>

          <p className='flex md:hidden uppercase text-TAWNY font-RIBEYE text-sm font-normal justify-center items-center leading-4 p-1'>
            {description}
          </p>
          {children}
        </div>
      </PGlink>
    );
  };

  // const LinkDescription = ({ description }) => {
  //   const [showDescription, setShowDescription] = useState(false);

  //   <div onMouseEnter={(showDescription = true)} onMouseLeave={(showDescription = false)}>
  //     <p className='flex uppercase text-TAWNY font-RIBEYE text-sm font-normal justify-center items-center leading-4 p-1'>
  //       {description}
  //     </p>
  //   </div>;
  // };

  const LgLinkContainer = () => {
    return (
      <div className='flex flex-row justify-between items-center min-w-[35%] max-w-[800px]'>
        <button onClick={handleClick} onMouseEnter={handleHover}>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-3xl text-TAWNY hover:text-RICH_TAWNY '>Varieties.</h1>
          </motion.div>
          <div ref={menuRef}>{varietiesMenuOpen && <VarietiesMenu />}</div>
        </button>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <LgLinkItem to={'/get'} description={'Where to purchase'} title={'Get.'} />
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LgLinkItem to={'/us'} description={"Papa G's Vegan Organics"} title={'Us.'} />
        </motion.div>
      </div>
    );
  };

  return (
    <div className='flex flex-col'>
      <div className='flex w-full justify-center'>
        <div className='flex flex-row w-full max-w-[1400px] justify-between items-center px-[1rem] lg:px-[2rem]'>
          <div className='flex flex-row justify-start items-center'>
            <SiteHeaderLogo />
            <SiteHeaderSloganLg />
          </div>
          <LgLinkContainer />
        </div>
      </div>
    </div>
  );
};

export default SiteHeaderLg;
