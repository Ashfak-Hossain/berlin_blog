import { BlogData } from '@/lib/notionUtils';
import { cn, formatDate } from '@/lib/utils';
import { Dot, MoveRight } from 'lucide-react';
import Link from 'next/link';
import FlipLink from '@/components/common/FlipLink';

const BlogCard = ({ blog }: { blog: BlogData }) => {
  const { title, slug, published, tags, description } = blog;

  return (
    <article className="pl-8 md:pl-12">
      {/* Title */}
      <h2
        className={cn(
          'relative text-2xl font-bold text-gray-900 dark:text-gray-100'
        )}
      >
        <Link
          href={`/blog/${slug}`}
          className="before:ease-in-ou relative inline-block transition-all duration-500 ease-in-out before:absolute before:inset-0 before:-z-10 before:origin-right before:scale-x-0 before:bg-indigo-400 before:transition-transform before:duration-500 hover:text-gray-900 hover:before:origin-left hover:before:scale-x-100"
        >
          {title}
        </Link>
      </h2>

      {/* Metadata */}
      <div className="mt-3 flex flex-col text-sm text-gray-600 dark:text-gray-400 md:flex-row md:gap-2">
        <time dateTime={published}>{formatDate(published)}</time>
        <Dot />
        {tags.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="me-2 rounded border border-indigo-400 bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-gray-700 dark:text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-base text-gray-800 dark:text-gray-300">
        {description}
      </p>

      {/* Read More */}
      <div className="mt-6">
        <Link
          href={`/blog/${slug}`}
          className="group relative inline-flex items-center gap-2"
        >
          <FlipLink duration={0.25} stagger={0.025} className="text-sm">
            Read more
          </FlipLink>
          <MoveRight
            size={20}
            className="mt-1 transition-transform duration-200 group-hover:translate-x-1"
          />
          <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-0 dark:from-teal-200 dark:via-blue-300 dark:to-indigo-400" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
