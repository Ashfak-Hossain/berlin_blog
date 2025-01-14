import NotFound from '@/app/not-found';
import BlogRenderer from '@/components/blog/BlogRenderer';
import PageHead from '@/components/blog/PageHead';
import { fetchBlogData } from '@/lib/blogService';
import notion from '@/lib/notion';
import React from 'react';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const data = await fetchBlogData(slug);

  if (data.results.length === 0) {
    return <NotFound />;
  }

  const title = data.results[0].properties.Name.title[0].plain_text;
  const pageID = data.results[0].id.replace(/-/g, '');
  const coverUrl =
    data.results[0].cover.type === 'external'
      ? data.results[0].cover.external.url
      : data.results[0].cover.file.url;
  const recordMap = await notion.getPage(pageID);

  return (
    <main className="flex flex-col items-center">
      <PageHead title={title} coverUrl={coverUrl} />
      <BlogRenderer recordMap={recordMap} />
    </main>
  );
};

export default page;
