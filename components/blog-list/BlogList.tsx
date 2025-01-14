import Link from 'next/link';

interface BlogListProps {
  blogData: {
    title: string;
    slug: string;
  }[];
}

const BlogList = ({ blogData }: BlogListProps) => {
  return (
    <>
      <ol className="list-decimal pl-5">
        {blogData.map((blog, index) => (
          <li
            key={index}
            className="py-3 text-lg font-medium text-gray-800 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 md:text-xl"
          >
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default BlogList;
