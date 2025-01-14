import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

interface PageHeadProps {
  title: string;
  coverUrl: string;
}

const PageHead = async ({ title, coverUrl }: PageHeadProps) => {
  const buffer = await fetch(coverUrl).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <header className="mt-16 flex flex-col items-center gap-6 px-2 py-5 text-center">
      {/* Blog Cover Image */}
      <div className="h-56 max-w-6xl overflow-hidden rounded-lg shadow-lg">
        <Image
          src={coverUrl}
          alt={title}
          width={1200}
          height={600}
          className="object-cover"
          blurDataURL={base64}
          placeholder="blur"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
        {title}
      </h1>
    </header>
  );
};

export default PageHead;
