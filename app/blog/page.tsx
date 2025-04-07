import BlogList from '@/components/table-of-contents/Table-of-contents';
import SectionContainer from '@/components/common/SectionContainer';
import SectionTitle from '@/components/Typography/SectionTitle';

const Page = async () => {
  return (
    <SectionContainer className="mt-16 justify-center">
      <div className="space-y-10 py-8">
        <SectionTitle className="text-left text-4xl md:text-5xl">
          Table Of Contents
        </SectionTitle>
        <BlogList />
      </div>
    </SectionContainer>
  );
};

export default Page;
