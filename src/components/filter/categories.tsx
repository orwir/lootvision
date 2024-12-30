import { Category } from '@/lib/data';
import clsx from 'clsx';
import React, { useState } from 'react';
import { IconButton } from '../widgets';
import { Icon } from '@iconify/react';

export default function Categories({
  categories,
  onSelected,
  onNewCategory,
}: {
  categories: Category[];
  onSelected: (category: Category) => void;
  onNewCategory: () => void;
}) {
  const [index, setIndex] = useState(0);
  const lastIndex = categories.length - 1;

  return (
    <div className="flex w-[20ch] flex-col">
      {categories.map((category, idx) => (
        <div key={category.id} className="flex flex-row hover:text-amber-500">
          <button
            onClick={() => {
              setIndex(idx);
              onSelected(category);
            }}
            className={clsx(
              'flex w-full flex-row items-center space-x-2 border-b border-r border-neutral-500 px-3 py-4 text-left text-xl',
              {
                'border-b-0 border-r-0 text-amber-600': idx === index,
                'rounded-tr-md border-t': idx === index + 1,
                'rounded-br-md': idx === index - 1,
              }
            )}
          >
            {category.name}
          </button>
        </div>
      ))}
      <div
        className={clsx(
          'flex w-[20ch] flex-grow border-r border-neutral-500 px-2 pt-8',
          {
            'rounded-tr-md border-t': index === lastIndex,
          }
        )}
      >
        <IconButton
          icon="mingcute:file-new-line"
          text={'New category'}
          onClick={onNewCategory}
        />
      </div>
    </div>
  );
}
