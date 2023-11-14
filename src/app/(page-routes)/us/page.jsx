'use client';
import { motion } from 'framer-motion';
import PageContainer from '../../components/PageContainer';
import { PageHeading, PageSubheading, PageText } from '../../layout-components/HeadingComponents';
import { ResTxtMd, ResTxtSm, ResTxtLg } from '../../layout-components/responisve-text';

const Us = () => {
  return (
    <PageContainer>
      <PageHeading title={'Us.'} />
      <PageSubheading subtitle={'Our Story'} />
      <PageText>
        Papa G&apos;s Tofu is a small family-owned company based in Portland, Oregon. Using only
        organic non-GMO soybeans, we carefully marinate, season, and bake our tofu to perfection in
        our kitchen in Portland, OR.
      </PageText>
      <PageSubheading subtitle={'Our Tofu'} />
      <p className='text-xl'>YOU CAN'T EAT A BRICK.</p>
      <PageText>
        Tofu sold in bricks can&apos;t absorb marinade, which is
        why we cut ours into small pieces: to ensure every bite is infused evenly with flavour and
        has the perfect texture. Our organic ingredients and commitment to quality make Papa
        G&apos;s Tofu the perfect addition to any meal or a tasty snack straight out of the bag. We
        cater to all dietary needs and are dedicated to providing high-quality, delicious vegan food
        for everyone.
      </PageText>
    </PageContainer>
  );
};

export default Us;
