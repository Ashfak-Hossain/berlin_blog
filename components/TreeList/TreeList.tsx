import React from 'react';

export const TreeList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="relative">
      {React.Children.map(children, (child, index) => (
        <div className="relative">
          {child}
          {index}
          {index === React.Children.count(children) - 2 && (
            <div className="absolute left-4 h-[0.125rem] w-[2px] bg-primary opacity-70 md:left-4" />
          )}
        </div>
      ))}
    </ul>
  );
};
