import { Icon, IconifyIcon } from '@iconify/react';
import React from 'react';

export function IconButton({
  icon,
  onClick,
}: {
  icon: string | IconifyIcon;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      <Icon icon={icon} className="h-6 w-6" />
    </button>
  );
}
