/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetchAllBlogs } from '@/lib/blogService';
import { BlogData } from '@/lib/notionUtils';
import Link from 'next/link';

// interface BlogListProps {
//   blogData: {
//     title: string;
//     slug: string;
//     tags: string[];
//   }[];
// }
const categories: Record<string, string> = {
  'computer science': 'Computer Science',
  cp: 'Competitive Programming',
  'electrical engineering': 'Electrical and Electronic Engineering',
  mathematics: 'Mathematics',
  'quantum computing': 'Quantum Computing',
  miscellaneous: 'Miscellaneous',
};

async function getBlogData() {
  const data = await fetchAllBlogs();

  return data.map((blog: BlogData) => ({
    title: blog.title,
    slug: blog.slug,
    tags: blog.tags,
  }));
}

// const TableOfContents = ({ blogData }: BlogListProps) => {
const TableOfContents = async () => {
  const categorizedBlogs = new Map<string, { title: string; slug: string }[]>();
  Object.keys(categories).forEach((key) => categorizedBlogs.set(key, []));

  const blogData = await getBlogData();

  blogData.forEach((blog) => {
    const category =
      blog.tags.find((tag) => categories[tag.toLowerCase()]) || 'miscellaneous';

    categorizedBlogs
      .get(category.toLowerCase())
      ?.push({ title: blog.title, slug: blog.slug });
  });

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4 md:p-6 lg:p-8">
      {Array.from(categorizedBlogs.entries())
        .filter(([_, blogs]) => blogs.length > 0)
        .map(([key, blogs]) => (
          <div
            key={key}
            className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800"
          >
            <h2 className="border-b pb-2 text-xl font-semibold text-gray-900 dark:text-gray-100 md:text-2xl">
              {categories[key]}
            </h2>
            <ol className="mt-2 list-decimal space-y-2 pl-6 md:pl-10">
              {blogs.map((blog, index) => (
                <li
                  key={index}
                  className="relative text-lg font-medium text-gray-800 transition-colors hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 md:text-xl"
                >
                  <Link
                    prefetch={true}
                    href={`/blog/${blog.slug}`}
                    className="relative block py-1 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
    </div>
  );
};

export default TableOfContents;
