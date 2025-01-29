/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';

interface BlogListProps {
  blogData: {
    title: string;
    slug: string;
    tags: string[];
  }[];
}

const categories: Record<string, string> = {
  'computer science': 'Computer Science',
  cp: 'Competitive Programming',
  'electrical engineering': 'Electrical and Electronic Engineering',
  mathematics: 'Mathematics',
  'quantum computing': 'Quantum Computing',
  miscellaneous: 'Miscellaneous',
};

const TableOfContents = ({ blogData }: BlogListProps) => {
  const categorizedBlogs = new Map<string, { title: string; slug: string }[]>();
  Object.keys(categories).forEach((key) => categorizedBlogs.set(key, []));
  blogData.forEach((blog) => {
    const category =
      blog.tags.find((tag) => categories[tag.toLowerCase()]) || 'miscellaneous';

    categorizedBlogs
      .get(category.toLowerCase())
      ?.push({ title: blog.title, slug: blog.slug });
  });

  return (
    <div className="space-y-6">
      {Array.from(categorizedBlogs.entries())
        .filter(([_, blogs]) => blogs.length > 0)
        .map(([key, blogs]) => (
          <div key={key}>
            <h2 className="border-b pb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {categories[key]}
            </h2>
            <ol className="mt-2 list-decimal space-y-2 pl-10">
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <li
                    key={index}
                    className="relative text-lg font-medium text-gray-800 transition-colors hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 md:text-xl"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="relative mb-2 inline-block before:absolute before:bottom-[-4px] before:left-1/2 before:h-[2px] before:w-0 before:bg-indigo-400 before:transition-all before:duration-500 before:ease-in-out hover:before:left-0 hover:before:w-full"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No posts available.</p>
              )}
            </ol>
          </div>
        ))}
    </div>
  );
};

export default TableOfContents;
