import { Filter as FilterModel } from '@/lib/data';
import React, { useState } from 'react';
import Category from '@/components/filter/category';
import clsx from 'clsx';

export default function Filter({ filter }: { filter: FilterModel }) {
  const [category, setCategory] = useState(filter.categories[0]);

  return (
    <div className="flex flex-row">
      <div className="flex w-44 flex-col">
        {filter.categories.map((item) => (
          <div key={item.id} className="flex flex-row">
            <button
              onClick={() => setCategory(item)}
              className={clsx('w-full truncate border p-2 text-left text-xl', {
                'font-bold': category === item,
              })}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
      <div className="h-full w-full">
        <Category category={category} />
      </div>
    </div>
  );
}
