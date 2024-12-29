import React from 'react';
import { Condition as ConditionModel } from '@/lib/data';

export default function Condtion({
  condition,
  config,
}: {
  condition: ConditionModel;
  config: Config;
}) {
  // TODO: implement specific conditions based on condition type
  return (
    <div className="flex flex-row">
      <div
        style={{ width: `${config.width}ch` }}
        className="border-b border-neutral-500"
      >
        {condition.label}
      </div>
      <div className="truncate border-b border-neutral-500 pe-2 ps-2">
        {condition.value}
      </div>
    </div>
  );
}

export type Config = {
  width: number;
  editable?: boolean;
};
