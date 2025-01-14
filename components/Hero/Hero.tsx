import PrimeNumers from '@/components/Hero/primeNums';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <PrimeNumers />
      <div className="flex flex-col">
        {/* Description */}
        <div className="absolute inset-0 flex flex-col items-center px-8 py-32">
          {/* Card */}
          <div className="max-w-4xl rounded-2xl border border-white/30 bg-gradient-to-b from-white/20 to-white/10 p-10 shadow-xl backdrop-blur-md">
            {/* Title */}
            <h1 className="relative text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
              Hi, I’m{' '}
              <span className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-300 dark:to-purple-300">
                Nobody!
              </span>
              <span className="absolute -left-4 -top-2 text-xl text-blue-400 dark:text-blue-200">
                ✨
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
              A faceless enthusiast from{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                AIUB
              </span>
              , secretly plotting to conquer the mysteries of{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                math
              </span>{' '}
              one scribbled note at a time. These blogs are my{' '}
              <span className="italic text-gray-800 dark:text-gray-200">
                glorified doodles
              </span>
              —messy explorations of{' '}
              <span className="font-semibold text-green-600 dark:text-green-400">
                numbers
              </span>
              ,{' '}
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                algorithms
              </span>
              , and the occasional stroke of{' '}
              <span className="font-semibold text-red-600 dark:text-red-400">
                genius
              </span>{' '}
              (or{' '}
              <span className="text-gray-600 line-through dark:text-gray-400">
                madness
              </span>
              ). Just a{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                nobody
              </span>
              , quietly pretending to make sense of it all.
            </p>

            {/* Decorative Line */}
            <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300"></div>
          </div>
        </div>

        {/* Scroll Button */}
        <div className="absolute bottom-8 right-8">
          <div
            className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border-2 border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
