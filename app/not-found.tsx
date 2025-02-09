import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
        404 - Page Not Found
      </h1>
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <Image
          src="/404.png"
          alt="404 - Page Not Found"
          layout="responsive"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default NotFound;
