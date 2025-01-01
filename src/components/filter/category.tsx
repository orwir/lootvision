import React, { useContext } from 'react';
import { CategoryContext, FilterContext } from '@/components/filter/context';
import Rule from '@/components/filter/rule';
import { IconButton } from '../widgets';
import { uuidv4 } from '@/lib/utils';

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

  function createRule() {
    if (!category) return; // Should never happen

    const updated = {
      ...category,
      rules: [
        ...category.rules,
        {
          id: uuidv4(),
          name: '',
          description: '',
          actions: [],
          conditions: [],
        },
      ],
    };

    setFilter({
      ...filter,
      categories: filter.categories.map((c) =>
        c.id === updated.id ? updated : c
      ),
    });
    setCategory(updated);
  }

  return (
    <div className="flex w-full">
      {category && (
        <div className="flex w-full flex-col space-y-2 px-4 py-2">
          {category.rules.map((rule) => (
            <Rule rule={rule} key={rule.id} />
          ))}
          <div className="ps-2">
            <IconButton
              icon="mingcute:add-square-line"
              text="New rule"
              onClick={createRule}
            />
          </div>
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
