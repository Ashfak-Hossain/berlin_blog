import BlogList from '@/components/table-of-contents/Table-of-contents';
import SectionContainer from '@/components/common/SectionContainer';
import SectionTitle from '@/components/Typography/SectionTitle';
// import { fetchAllBlogs } from '@/lib/blogService';
// import { BlogData } from '@/lib/notionUtils';

const Page = async () => {
  //? moved to TableOfContents.tsx
  // const data = await fetchAllBlogs();

  // const blogDataList = data.map((blog: BlogData) => ({
  //   title: blog.title,
  //   slug: blog.slug,
  //   tags: blog.tags,
  // }));

  return (
    <SectionContainer className="mt-16 justify-center">
      <div className="space-y-10 py-8">
        <SectionTitle className="text-left text-4xl md:text-5xl">
          Table Of Contents
        </SectionTitle>
        {/* <BlogList blogData={blogDataList} /> */}
        <BlogList />
      </div>
    </SectionContainer>
  );
};

export default Page;
