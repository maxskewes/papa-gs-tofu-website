'use client';
import { motion } from 'framer-motion';
import PageContainer from '../../components/PageContainer';
import {
  ParagraphText,
} from '../../layout-components/HeadingComponents';
import { outline } from '../../fonts';

const Us = () => {
  return (
    <PageContainer>
      <div className='relative text-center uppercase text-6xl md:text-7xl mb-0 pt-0 sm:pt-8 md:pt-0 lg:pt-8 pb-2 md:pb-8'>
        <div className='absolute text-RED blur-sm'>
          <p>Us.</p>
        </div>
        <div className='absolute text-BLUE'>
          <p>Us.</p>
        </div>
        <div className='relative text-SOFT_BLACK'>
          <p className={outline.className}>Us.</p>
        </div>
      </div>
      <div className='pb-8'>
        <p className='text-xl sm:text-2xl md:text-3xl text-DARK_TAWNY font-semibold text-center [text-shadow:_0px_0px_4px_rgb(196_0_0_/_30%)]'>
          Our Story.
        </p>
        <ParagraphText>
          Papa G&apos;s Tofu is a small family-owned company based in Portland, Oregon. Using only
          organic non-GMO soybeans, we carefully marinate, season, and bake our tofu to perfection
          in our kitchen in Portland, OR.
        </ParagraphText>
      </div>
      <div>

 
        <p className='text-xl sm:text-2xl md:text-3xl text-DARK_TAWNY font-semibold text-center [text-shadow:_0px_0px_4px_rgb(196_0_0_/_30%)]'>
          Our Tofu.
        </p>

        <ParagraphText>
          Tofu sold in bricks can&apos;t absorb marinade, which is why we cut ours into small
          pieces: to ensure every bite is infused evenly with flavour and has the perfect texture.
          </ParagraphText>
          <p className='text-md sm:text-lg md:text-xl text-DARK_TAWNY text-center font-semibold max-w-[1000px]'>
          You can&apos;t eat a brick.
        </p>
          <ParagraphText>
          Our organic ingredients and commitment to quality make Papa G&apos;s Tofu the perfect
          addition to any meal or a tasty snack straight out of the bag. We cater to all dietary
          needs and are dedicated to providing high-quality, delicious vegan food for everyone.
        </ParagraphText>
      </div>
    </PageContainer>
  );
};

export default Us;
