import { Filter as FilterModel } from '@/lib/data';
import React, { useState } from 'react';
import Filter from './filter';

export default function Game({ filters }: { filters: FilterModel[] }) {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className="flex flex-col">
      {/* <div className="flex flex-row">
        {filters.map((item) => (
          <div className="w-48 border p-2">{item.label}</div>
        ))}
      </div> */}
      <Filter filter={filter} />
    </div>
  );
}
