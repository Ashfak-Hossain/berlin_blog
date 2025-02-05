import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import NotFound from '@/app/not-found';
import { fetchBlogData, fetchRecordMap } from '@/lib/blogService';
import BlogLoadingSkeleton from '@/components/blog/BlogLoadingSkeleton';

const BlogRenderer = dynamic(() => import('@/components/blog/BlogRenderer'));
const PageHead = dynamic(() => import('@/components/blog/PageHead'));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const data = await fetchBlogData(slug);

  if (data.length === 0) return <NotFound />;

  const { title, coverUrl, pageID } = data[0];
  const recordMap = await fetchRecordMap(pageID);

  if (!recordMap) {
    return (
      <div className="flex min-h-screen items-center justify-center text-center">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Error loading content. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={<BlogLoadingSkeleton />}>
        <PageHead title={title} coverUrl={coverUrl} />
        <BlogRenderer recordMap={recordMap} />
      </Suspense>
    </main>
  );
};

export default Page;
