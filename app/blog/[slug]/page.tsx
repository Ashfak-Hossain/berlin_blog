import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import NotFound from '@/app/not-found';
import { fetchBlogData, fetchRecordMap } from '@/lib/blogService';
import BlogLoadingSkeleton from '@/components/blog/BlogLoadingSkeleton';

const BlogRenderer = dynamic(() => import('@/components/blog/BlogRenderer'));
const PageHead = dynamic(() => import('@/components/blog/PageHead'));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
    const { slug } = await params;

    const [data, recordMap] = await Promise.all([
      fetchBlogData(slug),
      fetchBlogData(slug).then((res) =>
        res.length ? fetchRecordMap(res[0].pageID) : null
      ),
    ]);

    if (data.length === 0 || !recordMap) return <NotFound />;

    const { title, coverUrl } = data[0];

    return (
      <main className="flex flex-col items-center">
        <PageHead title={title} coverUrl={coverUrl} />
        <Suspense fallback={<BlogLoadingSkeleton />}>
          <BlogRenderer recordMap={recordMap} />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog page:', error);
    return (
      <div className="flex min-h-screen items-center justify-center text-center">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          An unexpected error occurred. Please try again later.
        </p>
      </div>
    );
  }
};

export default Page;
