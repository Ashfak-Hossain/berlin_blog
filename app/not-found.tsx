import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="mt-24 flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        404 - Page Not Found
      </h1>
      <Image
        src="/404.png"
        alt="404 - Page Not Found"
        width={600}
        height={600}
      />
    </div>
  );
};

export default NotFound;
