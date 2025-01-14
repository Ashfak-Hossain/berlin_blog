import Link from 'next/link';
import { ModeToggle } from '@/components/theme-toggle';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={'/'}
          className="text-3xl font-bold text-gray-800 dark:text-gray-100"
        >
          Zeta
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/blog"
            className="relative font-bold text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="relative font-bold text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
          >
            About
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
