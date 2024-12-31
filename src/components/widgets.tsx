import { Icon, IconifyIcon } from '@iconify/react';
import clsx from 'clsx';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';

export function IconButton({
  icon,
  text,
  onClick,
}: {
  icon: string | IconifyIcon;
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-max flex-row items-center space-x-2 text-left hover:text-teal-500"
    >
      <Icon icon={icon} className="h-6 w-6" />
      {text && <div className="text-lg">{text}</div>}
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

  handleClickOutside(_ref, () => setExpanded(false));

  return (
    <div ref={_ref} className="relative inline-block space-y-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex w-48 flex-row items-center justify-end space-x-2 rounded-md border border-neutral-500 px-2 py-2 text-right hover:border-teal-700"
      >
        <div className="w-full overflow-hidden truncate">{selected.text}</div>
        <Icon
          icon="mingcute:down-small-line"
          className="h-6 w-6 group-hover:text-teal-700"
        />
      </button>
      {expanded && (
        <div className="absolute flex w-full flex-col items-end truncate rounded-md border border-neutral-500 bg-neutral-950 pe-2">
          {data.map((item) => (
            <button
              key={item.text}
              onClick={() => {
                setSelected(item);
                setExpanded(false);
                onSelected(item.value);
              }}
              className="p-2 hover:text-teal-500"
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Editable({
  className,
  text,
  placeholder = '',
  onTextChange,
}: {
  className?: string;
  text: string;
  placeholder: string;
  onTextChange: (text: string) => void;
}) {
  const _ref = useRef<HTMLDivElement>(null);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);

  handleClickOutside(_ref, () => {
    setEdit(false);
  });

  useEffect(() => {
    if (!edit && text !== value) {
      onTextChange(value);
    }
  }, [value, edit]);

  return (
    <div
      ref={_ref}
      onClick={() => setEdit(true)}
      className="flex hover:cursor-text"
    >
      {edit ? (
        <input
          className={clsx(
            className,
            'w-full border-b bg-neutral-950 placeholder-neutral-400 focus:outline-none'
          )}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') setEdit(false);
          }}
          placeholder={placeholder}
          autoFocus
        />
      ) : (
        <div
          className={clsx(className, 'pointer-events-none', {
            'text-neutral-400': !value,
          })}
        >
          {value || placeholder}
        </div>
      )}
    </div>
  );
}

function handleClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void
) {
  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleDocumentClick, false);
    document.addEventListener('touchend', handleDocumentClick, false);

    return () => {
      document.removeEventListener('click', handleDocumentClick, false);
      document.removeEventListener('touchend', handleDocumentClick, false);
    };
  }, []);
}
