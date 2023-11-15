import PageContainer from '../../components/PageContainer';
import { PageHeading, PageSubheading } from '../../layout-components/HeadingComponents';

const Contact = () => {
  return (
    <PageContainer>
      <PageHeading title={'Contact'} />
      <PageSubheading subtitle={'503 664-0274'} />
      <PageSubheading subtitle={'papagstofu@secretsocietyorgaincs.com'} />
    </PageContainer>
  );
};

export default Contact;
