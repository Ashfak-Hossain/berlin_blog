import SectionTitle from '@/components/Typography/SectionTitle';
import { TreeListItem } from '@/components/TreeList';
import BlogCard from '@/components/FeatBlogList/BlogCard';
import { BlogData } from '@/lib/notionUtils';

interface FeatBlogListProps {
  blogs: BlogData[];
}

const FeatBlogList = ({ blogs }: FeatBlogListProps) => {
  return (
    <section className="mx-auto max-w-4xl py-5">
      <div className="flex flex-col p-3">
        <SectionTitle>Decoded Thoughts</SectionTitle>
        <div className="ml-4 mt-5">
          {blogs.map((blog) => (
            <TreeListItem key={blog.slug}>
              <BlogCard blog={blog} />
            </TreeListItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatBlogList;
