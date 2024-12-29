import { Icon, IconifyIcon } from '@iconify/react';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';

export function IconButton({
  icon,
  onClick,
}: {
  icon: string | IconifyIcon;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className="hover:text-amber-600">
      <Icon icon={icon} className="h-6 w-6" />
    </button>
  );
}

type DropdownItem<T> = {
  value: T;
  text: string;
};

export function Dropdown<T>({
  data,
  onSelected,
}: {
  data: DropdownItem<T>[];
  onSelected: (selected: T) => void;
}) {
  const _ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(data[0]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (_ref.current && !_ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleDocumentClick, false);
    document.addEventListener('touchend', handleDocumentClick, false);

    return () => {
      document.removeEventListener('click', handleDocumentClick, false);
      document.removeEventListener('touchend', handleDocumentClick, false);
    };
  }, []);

  return (
    <div ref={_ref} className="relative inline-block space-y-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex w-48 flex-row items-center justify-end space-x-2 rounded-md border border-neutral-500 px-2 py-2 text-right hover:border-amber-600"
      >
        <div className="w-full overflow-hidden truncate">{selected.text}</div>
        <Icon
          icon="mingcute:down-small-line"
          className="h-6 w-6 group-hover:text-amber-600"
        />
      </button>
      {expanded && (
        <div className="just absolute flex w-full flex-col items-end truncate rounded-md border border-neutral-500 bg-neutral-950 pe-2">
          {data.map((item) => (
            <button
              key={item.text}
              onClick={() => {
                setSelected(item);
                setExpanded(false);
                onSelected(item.value);
              }}
              className="p-2 hover:text-amber-500"
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
