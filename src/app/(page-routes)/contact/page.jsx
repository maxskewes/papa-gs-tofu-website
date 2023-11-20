import PageContainer from '../../components/PageContainer';
import { PageHeading, PageSubheading, ParagraphText } from '../../layout-components/HeadingComponents';
import { outline } from '../../fonts';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <PageContainer>
        <div className='relative text-center uppercase text-6xl md:text-7xl'>
        <div className='absolute text-RED blur-sm'>
          <p>Contact.</p>
        </div>
        <div className='absolute text-BLUE'>
          <p>Contact.</p>
        </div>
        <div className='relative text-SOFT_BLACK'>
          <p className={outline.className}>Contact.</p>
        </div>
      </div>
      <p className='text-xl sm:text-2xl md:text-3xl text-DARK_TAWNY font-semibold text-center [text-shadow:_0px_0px_4px_rgb(196_0_0_/_30%)]'>
      503 664-0274
        </p>
      <ParagraphText>papagstofu@secretsocietyorgaincs.com</ParagraphText>
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;
