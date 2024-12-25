import React from 'react';
import { Category as CategoryModel } from '@/lib/data';
import Rule from '@/components/filter/rule';

export default function Category({ category }: { category: CategoryModel }) {
  return (
    <div className="flex flex-col">
      {category.rules.map((rule) => (
        <Rule rule={rule} />
      ))}
    </div>
  );
}
