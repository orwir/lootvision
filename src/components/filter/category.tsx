import React, { useContext } from 'react';
import { CategoryContext, FilterContext } from '@/components/filter/context';
import Rule from '@/components/filter/rule';

export default function Category() {
  const { filter, setFilter } = useContext(FilterContext);
  const { category, setCategory } = useContext(CategoryContext);

  function deleteCategory() {
    const index = Math.max(filter.categories.indexOf(category!) - 1, 0);
    const categories = filter.categories.filter((c) => c !== category);

    setFilter({
      ...filter,
      categories: categories,
    });
    setCategory(categories[index]);
  }

  return (
    <div className="flex w-full">
      {category && (
        <div className="flex w-full flex-col space-y-2 px-4 py-2">
          {category.rules.map((rule) => (
            <Rule rule={rule} key={rule.id} />
          ))}
          <div className="flex-grow" />
          <button
            className="self-end hover:text-teal-500"
            onClick={deleteCategory}
          >
            Delete category
          </button>
        </div>
      )}
    </div>
  );
}
