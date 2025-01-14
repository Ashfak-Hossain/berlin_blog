import React from 'react';
import { fonts } from '@/lib/font/fonts';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'z-10 text-2xl font-semibold text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl',
          className,
          fonts.serif.className
        )}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
