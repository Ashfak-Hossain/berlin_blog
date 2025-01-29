import BlogList from '@/components/blog-list/BlogList';
import SectionContainer from '@/components/common/SectionContainer';
import SectionTitle from '@/components/Typography/SectionTitle';
import { fetchAllBlogs } from '@/lib/blogService';
import { BlogData } from '@/lib/notionUtils';

const Page = async () => {
  const data = await fetchAllBlogs();

  const blogDataList = data.map((blog: BlogData) => ({
    title: blog.title,
    slug: blog.slug,
    tags: blog.tags,
  }));

  return (
    <SectionContainer className="mt-16 justify-center">
      {/* Section Header */}
      <div className="space-y-10 py-8">
        <SectionTitle className="text-left text-4xl md:text-5xl">
          Table Of Contents
        </SectionTitle>
        {/* Blog Titles List */}
        <BlogList blogData={blogDataList} />
        {not}
      </div>
    </SectionContainer>
  );
};

export default Page;
