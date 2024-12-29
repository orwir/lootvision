import React, { useState } from 'react';
import { IconButton } from '@/components/widgets';
import { Rule as RuleModel } from '@/lib/data';
import Action from '@/components/filter/action';
import Condition from '@/components/filter/condition';
import clsx from 'clsx';

export default function Rule({ rule }: { rule: RuleModel }) {
  const [expanded, setExpanded] = useState(false);

  const maxWidth = (values: { label: string }[]) =>
    values.reduce((max, value) => Math.max(value.label.length, max), 0);

  const maxWidthText = maxWidth([...rule.actions, ...rule.conditions]);

  return (
    <div className="flex w-full flex-col rounded-md border border-neutral-500">
      <div
        className={clsx(
          'flex w-full flex-row justify-between space-x-3 rounded-t-md bg-neutral-900 px-2 py-2',
          {
            'rounded-b-md': !expanded,
          }
        )}
      >
        <IconButton
          icon={
            expanded
              ? 'mingcute:square-arrow-up-line'
              : 'mingcute:square-arrow-down-line'
          }
          onClick={() => {
            setExpanded(!expanded);
          }}
        />
        <div className="flex-grow font-bold">{rule.name}</div>
        <IconButton icon={'mingcute:edit-4-line'} onClick={() => {}} />
        <IconButton icon="mingcute:delete-2-line" onClick={() => {}} />
      </div>
      {expanded && (
        <div className="w-full rounded-b-md bg-neutral-950 px-3 py-2">
          <div className="mb-2 flex h-28 flex-col items-center justify-center bg-slate-800">
            {/* Example of config */}
            <div>Filter rule preview</div>
            <div>Coming soon</div>
          </div>
          <div className="text-gray-400">Actions</div>
          <div className="flex flex-col space-y-1">
            {rule.actions.map((action) => (
              <Action
                key={action.id}
                action={action}
                config={{ width: maxWidthText }}
              />
            ))}
          </div>
          <div className="mt-4 text-gray-400">Conditions</div>
          <div className="mb-2 flex flex-col space-y-1">
            {rule.conditions.map((condition) => (
              <Condition
                key={condition.id}
                condition={condition}
                config={{ width: maxWidthText }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
