import React from 'react';
import { Action as ActionModel } from '@/lib/data';

export default function Action({
  action,
  config,
}: {
  action: ActionModel;
  config: Config;
}) {
  // TODO: implement specific actions based on action type
  return (
    <div className="flex flex-row space-x-2 border">
      <div style={{ width: `${config.width}ch` }} className="border">
        {action.label}
      </div>
      <div className="w-[32ch] truncate border pe-2 ps-2">{action.value}</div>
    </div>
  );
}

export type Config = {
  width: number;
  editable: boolean;
};
