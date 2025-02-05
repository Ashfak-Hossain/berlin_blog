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
    <header className="mt-16 flex max-w-4xl flex-col items-start gap-5 px-4 py-5 sm:px-8">
      {/* Blog Cover Image */}
      <div className="relative h-28 w-full overflow-hidden rounded-xl shadow-lg sm:h-32 md:h-36 lg:h-40 xl:h-44">
        <Image
          src={coverUrl}
          alt={title}
          width={1200}
          height={400}
          className="h-full w-full object-cover object-center"
          blurDataURL={base64}
          placeholder="blur"
        />
      </div>

      {/* Blog Title */}
      <h1 className="max-w-6xl text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
        {title}
      </h1>
    </header>
  );
};

export default PageHead;
