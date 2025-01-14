import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('mx-auto max-w-4xl px-4 sm:px-6 xl:px-0', className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
