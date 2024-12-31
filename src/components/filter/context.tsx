import { EmptyFilter, Filter, Category } from '@/lib/data';
import { createContext } from 'react';

export const FilterContext = createContext<{
  filter: Filter;
  setFilter: (filter: Filter) => void;
}>({
  filter: EmptyFilter,
  setFilter: () => {},
});

export const CategoryContext = createContext<{
  category: Category | null;
  setCategory: (category: Category) => void;
}>({
  category: null,
  setCategory: () => {},
});
