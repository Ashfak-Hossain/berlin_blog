import { Skeleton } from '@/components/ui/skeleton';

const BlogLoadingSkeleton = () => {
  return (
    <div className="mx-auto mt-16 w-full max-w-3xl px-4 md:px-0">
      {/* Cover Image Skeleton */}
      <Skeleton className="mb-8 h-64 w-full rounded-xl" />

      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="mx-auto h-9 w-3/4" />
          <Skeleton className="mx-auto h-6 w-1/2" />
        </div>

        {/* Metadata Skeleton */}
        <div className="flex items-start space-x-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
            {/* Tags Skeleton */}
            <div className="flex flex-wrap gap-2 pt-5">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-20 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4 pt-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/4" />
          <div className="pt-4">
            <Skeleton className="h-64 w-full" />
          </div>
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
};

export default BlogLoadingSkeleton;
