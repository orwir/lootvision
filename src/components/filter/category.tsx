import React, { useContext } from 'react';
import { CategoryContext } from './context';
import Rule from './rule';

export default function Category() {
  const { category } = useContext(CategoryContext);

  return (
    <div className="flex w-full">
      {category && (
        <div className="flex w-full flex-col space-y-2 px-4 py-2">
          {category.rules.map((rule) => (
            <Rule rule={rule} key={rule.id} />
          ))}
        </div>
      )}
    </div>
  );
}
