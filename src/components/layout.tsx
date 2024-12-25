import { Link } from 'gatsby';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-row space-x-2 px-2 py-3">
        {gameLinks.map((game) => (
          <Link to={game.to}>{game.label}</Link>
        ))}
      </div>
      <div className="px-2">{children}</div>
    </div>
  );
}

const gameLinks = [
  {
    to: '/poe1',
    label: 'PoE 1',
  },
  {
    to: '/poe2',
    label: 'PoE 2',
  },
];
