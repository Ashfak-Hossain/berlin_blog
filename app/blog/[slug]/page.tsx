import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import NotFound from '@/app/not-found';
import { fetchBlogData } from '@/lib/blogService';
import notion from '@/lib/notion';
import { BlogHeaderData } from '@/lib/notionUtils';
import BlogLoadingSkeleton from '@/components/blog/BlogLoadingSkeleton';

const BlogRenderer = dynamic(() => import('@/components/blog/BlogRenderer'));
const PageHead = dynamic(() => import('@/components/blog/PageHead'));

const Page = async ({ params }: { params: { slug: string } }) => {
  const data: BlogHeaderData[] = await fetchBlogData(params.slug);

  if (data.length === 0) return <NotFound />;

  const { title, coverUrl, pageID } = data[0];
  const recordMap = await notion.getPage(pageID);

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
