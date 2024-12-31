import clsx from 'clsx';
import React, { useContext, useState } from 'react';
import { Editable, IconButton } from '../widgets';
import { CategoryContext, FilterContext } from './context';
import { uuidv4 } from '@/lib/utils';
import { Category } from '@/lib/data';

export default function Categories() {
  const { filter, setFilter } = useContext(FilterContext);
  const { setCategory } = useContext(CategoryContext);
  const [index, setIndex] = useState(0);

  function onSelectCategory(index: number, category: Category) {
    setIndex(index);
    setCategory(category);
  }

  function onNewCategory() {
    const category = {
      id: uuidv4(),
      name: '',
      rules: [],
    };
    setFilter({
      ...filter,
      categories: [...filter.categories, category],
    });
    setCategory(category);
    setIndex(filter.categories.length);
  }

  function onChangeCategoryName(category: Category, name: string) {
    category = { ...category, name: name };

    setFilter({
      ...filter,
      categories: filter.categories.map((v) => {
        if (v.id === category.id) {
          return category;
        }
        return v;
      }),
    });
    setCategory(category);
  }

  return (
    <div className="flex w-[20ch] flex-col">
      {filter.categories.map((category, idx) => (
        <div
          key={category.id}
          className={clsx(
            'w-full items-center border-b border-r border-neutral-500 text-left text-xl',
            {
              'border-b-0 border-r-0 font-bold': idx === index,
              'rounded-tr-md border-t': idx === index + 1,
              'rounded-br-md': idx === index - 1,
              'text-neutral-400 hover:text-teal-500': idx !== index,
            }
          )}
        >
          {/* using hidden to avoid the bug where name change doesn't saved if element gone completely */}
          <Editable
            className={clsx('mx-3 my-4 w-full text-left', {
              hidden: idx !== index,
            })}
            text={category.name}
            placeholder="category..."
            onTextChange={(name) => onChangeCategoryName(category, name)}
          />
          <button
            className={clsx('w-full px-3 py-4 text-left', {
              hidden: idx === index,
            })}
            onClick={() => onSelectCategory(idx, category)}
          >
            {category.name ? category.name : '...'}
          </button>
        </div>
      ))}
      <div
        className={clsx(
          'flex w-[20ch] flex-grow border-r border-neutral-500 px-2 pt-8',
          {
            'rounded-tr-md border-t': index === filter.categories.length - 1,
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
