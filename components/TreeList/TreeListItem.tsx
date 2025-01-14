export const TreeListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="relative list-none pb-4 pt-8">
      <div className="absolute top-0 ml-2 h-full w-[3px] rounded-full bg-primary bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 dark:from-blue-300 dark:to-purple-300 md:ml-4" />
      <div className="absolute ml-2 mt-3 h-[3px] w-2 rounded-full bg-primary bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 dark:from-blue-300 dark:to-purple-300 md:ml-4 md:w-4" />
      {children}
    </li>
  );
};
