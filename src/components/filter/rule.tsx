import React, { useState } from 'react';
import { IconButton } from '@/components/widgets';
import { Rule as RuleModel } from '@/lib/data';
import Action from '@/components/filter/action';
import Condition from '@/components/filter/condition';

export default function Rule({ rule }: { rule: RuleModel }) {
  const [expanded, setExpanded] = useState(true);
  const [editable, setEditable] = useState(false);

  const maxWidth = (values: { label: string }[]) =>
    values.reduce((max, value) => Math.max(value.label.length, max), 0);

  return (
    <div className="border pe-2 ps-2">
      <div className="flex flex-row items-center space-x-3 border-b pb-2 pt-2">
        <div className="flex-grow">{rule.label}</div>
        <IconButton
          icon={editable ? 'mingcute:save-line' : 'mingcute:edit-4-line'}
          onClick={() => {
            setEditable(!editable);
          }}
        />
        <IconButton icon="mingcute:delete-2-line" onClick={() => {}} />
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
      </div>
      {expanded && (
        <div className="flex flex-col space-y-2">
          <div className="text-sm">{rule.description}</div>
          <div className="h-24 bg-black"></div>
          <div className="flex flex-row border">
            <div className="flex w-1/2 flex-col space-y-2 border">
              <div>Actions:</div>
              {rule.actions.map((action) => (
                <Action
                  key={action.id}
                  action={action}
                  config={{ width: maxWidth(rule.actions), editable: editable }}
                />
              ))}
            </div>
            <div className="flex w-1/2 flex-col space-y-2 border">
              <div>Conditions:</div>
              {rule.conditions.map((condition) => (
                <Condition
                  key={condition.id}
                  condition={condition}
                  config={{
                    width: maxWidth(rule.conditions),
                    editable: editable,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
