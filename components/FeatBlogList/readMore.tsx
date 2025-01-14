'use client';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogLink = ({ slug }: { slug: string }) => {
  return (
    <div className="mt-6">
      <Link
        href={`${slug}`}
        className="group relative inline-flex items-center gap-2 text-primary transition-colors"
      >
        <motion.span className="relative z-10 px-1 transition-colors duration-300 ease-in-out group-hover:text-white">
          Read more
        </motion.span>
        <MoveRight
          size={20}
          className="mt-1 transition-transform duration-200 group-hover:translate-x-1"
        />

        {/* Underline Animation: Fills from left to right on hover */}
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary"
          initial={{ width: 0 }}
          animate={{
            width: '100%',
            transition: { duration: 0.3 },
          }}
          whileHover={{
            width: '100%',
            transition: { duration: 0.3 },
          }}
        />
      </Link>
    </div>
  );
};

export default BlogLink;
