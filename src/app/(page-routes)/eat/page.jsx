import PageContainer from '../../components/PageContainer';
import { PageHeading, PageSubheading } from '../../layout-components/HeadingComponents';

const Eat = () => {
  return (
    <PageContainer>
      <PageHeading title={'Eat.'} />
      <PageSubheading
        subtitle={
          'Add to pasta, serve with beans & rice, enjoy on top of salad or eat as is: hot or cold. Available in four different flavors to suit a variety of recipe needs.'
        }
      />
    </PageContainer>
  );
};

export default Eat;
