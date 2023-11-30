import { useState, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSearch = (items: any[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = useMemo(
    () =>
      items.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [items, searchTerm]
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
};
