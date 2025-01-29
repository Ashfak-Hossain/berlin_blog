import NotFound from '@/app/not-found';
import BlogRenderer from '@/components/blog/BlogRenderer';
import PageHead from '@/components/blog/PageHead';
import { fetchBlogData } from '@/lib/blogService';
import notion from '@/lib/notion';
import { BlogHeaderData } from '@/lib/notionUtils';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const data: BlogHeaderData[] = await fetchBlogData(slug);

  if (data.length === 0) {
    return <NotFound />;
  }

  const { title, coverUrl, pageID } = data[0];

  const recordMap = await notion.getPage(pageID);

  return (
    <main className="flex flex-col items-center">
      <PageHead title={title} coverUrl={coverUrl} />
      <BlogRenderer recordMap={recordMap} />
    </main>
  );
};

export default page;
